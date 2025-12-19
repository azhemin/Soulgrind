// AOS (Animate On Scroll) -kirjaston alustus - hoitaa scrollaus-animaatiot
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Smooth scrolling kun klikataan navigaation linkkejä
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Sulkee mobiilivalikon automaattisesti kun klikataan linkkiä
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Navigointipalkin efekti kun scrollataan - muuttaa kokoa
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.8)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    }
    
    lastScroll = currentScroll;
});

// Lataa keikat JSON-tiedostosta ja näyttää ne sivulla
async function loadShows() {
    try {
        const response = await fetch('data/shows.json');
        if (!response.ok) throw new Error('Failed to load shows');
        
        const data = await response.json();
        const showsList = document.getElementById('showsList');
        
        if (data.shows && data.shows.length > 0) {
            showsList.innerHTML = data.shows.map(show => {
                const showDate = new Date(show.date);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = showDate.toLocaleDateString('fi-FI', options);
                
                let statusBadge = '';
                if (show.status === 'almost-sold-out') {
                    statusBadge = '<span class="badge bg-warning text-dark ms-2">Loppumassa!</span>';
                } else if (show.status === 'sold-out') {
                    statusBadge = '<span class="badge bg-danger ms-2">Loppuunmyyty</span>';
                }
                
                return `
                    <div class="list-group-item list-group-item-action bg-dark text-white border-secondary mb-3 rounded" data-aos="fade-up">
                        <div class="d-flex w-100 justify-content-between align-items-center">
                            <div class="flex-grow-1">
                                <div class="row align-items-center">
                                    <div class="col-md-2 mb-2 mb-md-0">
                                        <div class="date-box text-center">
                                            <div class="month text-primary fw-bold">${showDate.toLocaleDateString('fi-FI', { month: 'short' }).toUpperCase()}</div>
                                            <div class="day display-6 fw-bold">${showDate.getDate()}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-2 mb-md-0">
                                        <h5 class="mb-1 fw-bold">${show.venue}</h5>
                                        <p class="mb-0 text-muted">
                                            <i class="bi bi-geo-alt"></i> ${show.city}, ${show.country}
                                        </p>
                                    </div>
                                    <div class="col-md-4 text-md-end">
                                        ${show.status !== 'sold-out' ? 
                                            `<a href="https://www.tiketti.fi" class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                                                <i class="bi bi-ticket-perforated"></i> Osta liput
                                            </a>` : 
                                            '<span class="text-danger fw-bold">Loppuunmyyty</span>'
                                        }
                                        ${statusBadge}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        } else {
            showsList.innerHTML = `
                <div class="alert alert-info text-center">
                    <i class="bi bi-info-circle me-2"></i>
                    Ei tulevia keikkoja tällä hetkellä. Seuraa meitä sosiaalisessa mediassa!
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading shows:', error);
        document.getElementById('showsList').innerHTML = `
            <div class="alert alert-danger text-center">
                <i class="bi bi-exclamation-triangle me-2"></i>
                Keikkatietojen lataaminen epäonnistui. Yritä myöhemmin uudelleen.
            </div>
        `;
    }
}

// Lataa uutiset JSON:
async function loadNews() {
    try {
        const response = await fetch('data/news.json');
        if (!response.ok) throw new Error('Failed to load news');
        
        const data = await response.json();
        const newsList = document.getElementById('newsList');
        
        if (data.news && data.news.length > 0) {
            newsList.innerHTML = data.news.map((item, index) => {
                const newsDate = new Date(item.date);
                const formattedDate = newsDate.toLocaleDateString('fi-FI', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
                
                let categoryBadge = '';
                let categoryColor = 'primary';
                
                switch(item.category) {
                    case 'release':
                        categoryBadge = 'Julkaisu';
                        categoryColor = 'success';
                        break;
                    case 'tour':
                        categoryBadge = 'Kiertue';
                        categoryColor = 'primary';
                        break;
                    case 'video':
                        categoryBadge = 'Video';
                        categoryColor = 'danger';
                        break;
                    case 'announcement':
                        categoryBadge = 'Ilmoitus';
                        categoryColor = 'info';
                        break;
                    default:
                        categoryBadge = 'Uutinen';
                        categoryColor = 'secondary';
                }
                
                return `
                    <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                        <div class="card bg-dark text-white h-100 border-0 shadow">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <span class="badge bg-${categoryColor}">${categoryBadge}</span>
                                    <small class="text-muted">
                                        <i class="bi bi-calendar3"></i> ${formattedDate}
                                    </small>
                                </div>
                                <h4 class="card-title mb-3">${item.title}</h4>
                                <p class="card-text text-muted mb-3">${item.excerpt}</p>
                                <p class="card-text">${item.content}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        } else {
            newsList.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-info text-center">
                        <i class="bi bi-info-circle me-2"></i>
                        Ei uutisia tällä hetkellä.
                    </div>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading news:', error);
        document.getElementById('newsList').innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger text-center">
                    <i class="bi bi-exclamation-triangle me-2"></i>
                    Uutisten lataaminen epäonnistui. Yritä myöhemmin uudelleen.
                </div>
            </div>
        `;
    }
}

// Uutiskirjeen tilauslomakkeen käsittely - näyttää onnistumis-viestin
const newsletterForm = document.querySelector('#contact form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Luo onnistumisviesti ja näytä se
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success mt-3 text-center';
        successAlert.innerHTML = `
            <i class="bi bi-check-circle me-2"></i>
            Kiitos! Olet nyt liittynyt postituslistallemme.
        `;
        
        this.appendChild(successAlert);
        this.querySelector('input[type="email"]').value = '';
        
        // Piilottaa viestin 5 sekunnin jälkeen
        setTimeout(() => {
            successAlert.remove();
        }, 5000);
    });
}

// Korostaa nykyisen osion navigaatiossa kun scrollataan
function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Käynnistetään kaikki funktiot kun sivu on latautunut
document.addEventListener('DOMContentLoaded', function() {
    loadShows();
    loadNews();
    setActiveNavLink();
    
    // Fade-in efekti kun sivu latautuu
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Piilottaa kuvat jos ne ei lataudu (error handling)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
    });
});

// Lazy loading kuville - lataa kuvat vasta kun ne tulee näkyviin (parantaa suorituskykyä)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}