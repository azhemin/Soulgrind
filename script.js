// ===========================================
// SOULGRIND - JAVASCRIPT-TOIMINNOT
// Lataa uutiset ja keikat JSON-tiedostoista
// ===========================================

// Odota että sivu on latautunut
document.addEventListener('DOMContentLoaded', function() {
    // Alusta AOS-animaatiot
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });
    
    // Lataa uutiset
    lataaUutiset();
    
    // Lataa keikat
    lataaKeikat();
    
    // Lisää navigaation taustan liuku-efekti
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
});

// Funktio uutisten lataamiseen
async function lataaUutiset() {
    try {
        const vastaus = await fetch('data/news.json');
        const data = await vastaus.json();
        // JSON voi olla joko taulukko suoraan tai objekti jossa on news-kenttä
        const uutiset = Array.isArray(data) ? data : (data.news || []);
        naytaUutiset(uutiset);
    } catch (virhe) {
        console.error('Virhe uutisia ladattaessa:', virhe);
        document.getElementById('news-container').innerHTML = 
            '<div class="col-12 text-center"><p>Uutisia ei voitu ladata.</p></div>';
    }
}

// Funktio uutisten näyttämiseen
function naytaUutiset(uutiset) {
    const container = document.getElementById('news-container');
    container.innerHTML = '';
    
    uutiset.forEach((uutinen, indeksi) => {
        const viive = indeksi * 100;
        const kortti = `
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${viive}">
                <div class="card album-card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${uutinen.otsikko}</h5>
                        <p class="card-text"><small class="text-muted">${uutinen.paivays}</small></p>
                        <p class="card-text">${uutinen.sisalto}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += kortti;
    });
    
    // Päivitä AOS-animaatiot
    AOS.refresh();
}

// Funktio keikkojen lataamiseen
async function lataaKeikat() {
    try {
        const vastaus = await fetch('data/shows.json');
        const data = await vastaus.json();
        // JSON voi olla joko taulukko suoraan tai objekti jossa on shows-kenttä
        const keikat = Array.isArray(data) ? data : (data.shows || []);
        naytaKeikat(keikat);
    } catch (virhe) {
        console.error('Virhe keikkoja ladattaessa:', virhe);
        document.getElementById('shows-container').innerHTML = 
            '<div class="col-12 text-center"><p>Keikkoja ei voitu ladata.</p></div>';
    }
}

// Funktio keikkojen näyttämiseen
function naytaKeikat(keikat) {
    const container = document.getElementById('shows-container');
    container.innerHTML = '';
    
    if (keikat.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p>Ei tulevia keikkoja tällä hetkellä.</p></div>';
        return;
    }
    
    keikat.forEach((keikka, indeksi) => {
        const viive = indeksi * 100;
        const kortti = `
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${viive}">
                <div class="card album-card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${keikka.paikka}</h5>
                        <p class="card-text"><small class="text-muted">${keikka.paivays}</small></p>
                        <p class="card-text"><i class="bi bi-geo-alt-fill"></i> ${keikka.kaupunki}, ${keikka.maa}</p>
                        ${keikka.lippu ? `<a href="${keikka.lippu}" class="btn btn-primary btn-sm" target="_blank">Osta liput</a>` : ''}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += kortti;
    });
    
    // Päivitä AOS-animaatiot
    AOS.refresh();
}

// Smooth scroll navigaatiolinkeille
document.querySelectorAll('a[href^="#"]').forEach(linkki => {
    linkki.addEventListener('click', function(e) {
        e.preventDefault();
        const kohde = document.querySelector(this.getAttribute('href'));
        if (kohde) {
            kohde.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
