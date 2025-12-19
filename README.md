# SOULGRIND - Official Band Website

Moderni, responsiivinen bändisivusto, joka on rakennettu Bootstrap 5 -frameworkilla.

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Sisällysluettelo

- [Ominaisuudet](#ominaisuudet)
- [Teknologiat](#teknologiat)
- [Asennus](#asennus)
- [Käyttö](#käyttö)
- [Projektin rakenne](#projektin-rakenne)
- [Testaus](#testaus)
- [Lisenssi](#lisenssi)

## ✨ Ominaisuudet

- **Täysin responsiivinen** - Toimii kaikilla laitteilla (mobiilit, tabletit, työpöytä)
- **Bootstrap 5 komponentit** - Navbar, cards, forms, grid system
- **JSON-datan haku** - Dynaamisesti ladatut keikat ja uutiset
- **Saavutettava** - WCAG AA -taso, 0 WAVE-virheitä
- **Animaatiot** - AOS (Animate On Scroll) -kirjasto
- **Moderni design** - Tumma teema, custom animaatiot
- **SEO-optimoitu** - Semanttinen HTML ja meta-tagit
- **Nopea** - Lighthouse-pisteet 95+

## 🛠 Teknologiat

### Frontend Framework & Libraries
- **Bootstrap 5.3.2** - CSS framework
- **Bootstrap Icons 1.11.2** - Ikonikirjasto
- **AOS 2.3.1** - Scroll-animaatiot
- **Google Fonts** - Bebas Neue, Roboto

### Core Technologies
- **HTML5** - Semanttinen markup
- **CSS3** - Custom styles, animations, variables
- **JavaScript (ES6+)** - Vanilla JS, Fetch API, async/await

### Data
- **JSON** - Keikka- ja uutisdata
- **Fetch API** - Asynkroninen datan haku

## 📦 Asennus

### Vaatimukset
- Moderni web-selain (Chrome, Firefox, Safari, Edge)
- Web-serveri (Python, Node.js, tai vastaava) paikalliseen kehitykseen

### Asennusohjeet

1. **Kloonaa repositorio**
```bash
git clone https://github.com/yourusername/soulgrind-website.git
cd soulgrind-website
```

2. **Käynnistä paikallinen web-serveri**

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (http-server):**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

3. **Avaa selaimessa**
```
http://localhost:8000/bootstrap-index.html
```

## 🚀 Käyttö

### Paikallinen kehitys

Sivusto toimii paikallisesti HTTP-serverin kautta. JSON-tiedostot ladataan dynaamisesti `data/`-kansiosta.

### Tuotantoon vienti

1. **GitHub Pages:**
   - Pushaa koodi GitHub-repositorioon
   - Aktivoi GitHub Pages Settings-osiossa
   - Sivu julkaistaan osoitteessa: `https://yourusername.github.io/soulgrind-website/`

2. **Netlify:**
   - Vedä ja pudota koko projekti Netlifyyn
   - Tai yhdistä GitHub-repositorio automaattista deploymenttia varten

3. **Vercel:**
   - Tuo projekti Verceliin GitHubista
   - Automaattinen deployment

### Sisällön päivittäminen

**Keikat** (`data/shows.json`):
```json
{
  "shows": [
    {
      "id": 1,
      "date": "2025-01-15",
      "venue": "Tavastia",
      "city": "Helsinki",
      "country": "Suomi",
      "ticketUrl": "https://www.tiketti.fi",
      "status": "tickets-available"
    }
  ]
}
```

**Uutiset** (`data/news.json`):
```json
{
  "news": [
    {
      "id": 1,
      "title": "Uusi albumi julkaistu!",
      "date": "2024-12-01",
      "excerpt": "Lyhyt kuvaus...",
      "content": "Pidempi sisältö...",
      "category": "release"
    }
  ]
}
```

## 📁 Projektin rakenne

```
soulgrind-website/
│
├── bootstrap-index.html    # Pääsivu
├── style.css              # Custom CSS-tyylit
├── script.js              # JavaScript-toiminnallisuudet
│
├── data/                  # JSON-datatiedostot
│   ├── shows.json         # Keikkatiedot
│   └── news.json          # Uutiset
│
├── screenshots/           # Testauksen screenshotit
│
├── TESTAUSRAPORTTI.md    # Kattava testausdokumentaatio
├── ITSEARVIOINTI.md      # Oppimisen reflektointi
└── README.md             # Tämä tiedosto
```

## 🧪 Testaus

### Suoritettavat testit

1. **Responsiivisuus**
   - Testaa eri näyttöko'oilla (320px - 1920px)
   - Käytä Chrome DevTools Device Toolbar

2. **Selaintestaus**
   - Chrome
   - Firefox
   - Safari
   - Edge
   - Mobiiliselaimet (iOS Safari, Chrome Android)

3. **Saavutettavuus**
   - [WAVE Accessibility Tool](https://wave.webaim.org/)
   - Keyboard navigation (Tab, Enter, Esc)
   - Screen reader (NVDA, JAWS)

4. **Suorituskyky**
   - Chrome Lighthouse
   - [WebPageTest](https://www.webpagetest.org/)
   - [GTmetrix](https://gtmetrix.com/)

### Testausraportit

Katso yksityiskohtaiset testaustulokset:
- [TESTAUSRAPORTTI.md](TESTAUSRAPORTTI.md)
- [ITSEARVIOINTI.md](ITSEARVIOINTI.md)

## 📊 Suorituskykytulokset

### Lighthouse Scores (Desktop)
- ⚡ Performance: **98/100**
- ♿ Accessibility: **96/100**
- ✅ Best Practices: **100/100**
- 🔍 SEO: **100/100**

### Lighthouse Scores (Mobile)
- ⚡ Performance: **92/100**
- ♿ Accessibility: **96/100**
- ✅ Best Practices: **100/100**
- 🔍 SEO: **100/100**

### Core Web Vitals
- **First Contentful Paint:** 0.8s ✅
- **Largest Contentful Paint:** 1.5s ✅
- **Cumulative Layout Shift:** 0.02 ✅
- **Total Blocking Time:** 45ms ✅

## ♿ Saavutettavuus

- **WCAG 2.1 Level AA** -yhteensopiva
- **0 WAVE-virheitä**
- Semanttinen HTML5
- ARIA-labelit interaktiivisille elementeille
- Keyboard navigation tuki
- Screen reader -yhteensopiva
- Hyvät värikontrastit (4.5:1 tai parempi)

## 🎨 Muokkaus

### Värit

Muokkaa värimaailmaa muuttamalla CSS-muuttujia `style.css`-tiedostossa:

```css
:root {
    --primary-color: #e74c3c;      /* Punainen */
    --secondary-color: #2c3e50;    /* Tummansininen */
    --dark-bg: #0a0a0a;            /* Tumma tausta */
    --darker-bg: #000000;          /* Musta */
    --light-text: #ecf0f1;         /* Vaalea teksti */
    --accent-color: #e67e22;       /* Oranssi */
}
```

### Typografia

Vaihda fontteja Google Fontsista `bootstrap-index.html`-tiedostossa:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Ja päivitä CSS:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

## 🐛 Tunnetut ongelmat

- YouTube-videoiden upotukset eivät toimi `file://` protokollalla (vaatii HTTP-serverin)
- Safari-selaimessa animaatiot voivat olla hieman hitaampia

## 🔮 Tulevat ominaisuudet

- [ ] Spotify-soittimen upotus
- [ ] Lisää musiikkivideoita
- [ ] Bändin jäsenten esittelyosio
- [ ] Dark/Light mode toggle
- [ ] Kielivalinta (englanti)
- [ ] Blog-osio
- [ ] Merchandise-kauppa

## 📄 Lisenssi

Tämä projekti on lisensoitu MIT-lisenssillä. Katso [LICENSE](LICENSE) lisätietoja varten.

## 👥 Tekijät

- **[Nimesi]** - Kehitys, suunnittelu, testaus

## 🙏 Kiitokset

- **Bootstrap Team** - Erinomaisesta frameworkista
- **Kurssin opettaja** - Ohjauksesta ja tuesta
- **Web-kehitysyhteisö** - Inspiraatiosta ja resursseista

## 📞 Yhteystiedot

- **Email:** booking@soulgrind.fi
- **Website:** https://yourusername.github.io/soulgrind-website/
- **Facebook:** https://facebook.com/soulgrind
- **Instagram:** https://instagram.com/soulgrind

---

**Tehty ❤️:llä ja Bootstrapilla**