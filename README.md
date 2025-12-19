# SOULGRIND - Bändisivusto

Tein tämän sivuston Soulgrind-bändille Bootstrap 5:llä. Sivusto toimii tietokoneella, tabletilla ja puhelimella.

**Tekijä:** Miika Niemelä  
**Päivämäärä:** 19.12.2025  
**Kurssi:** Web-ohjelmointi

## Mitä sivustolla on

- **Responsiivinen** - Toimii kaikilla laitteilla
- **Bootstrap 5** - Käytin valmista Bootstrap-kirjastoa
- **Keikat ja uutiset** - Ladataan JSON-tiedostoista JavaScriptillä
- **Tumma teema** - Sopii metal-bändille hyvin
- **Animaatiot** - Sivulla on scrollaus-animaatioita
- **Spotify/YouTube-linkit** - Voi kuunnella musiikkia

## Käytetyt teknologiat

- **Bootstrap 5** - Responsiivinen CSS-kirjasto
- **HTML5** - Sivun rakenne
- **CSS3** - Omat tyylit
- **JavaScript** - Keikkojen ja uutisten lataus
- **JSON** - Keikka- ja uutisdata
- **Google Fonts** - Bebas Neue ja Roboto fontit
- **AOS** - Scrollaus-animaatiot

## Miten saan sivuston pyörimään

### Vaihe 1: Lataa tiedostot

Kloonaa GitHubista:
```bash
git clone https://github.com/azhemin/Soulgrind.git
cd Soulgrind
```

### Vaihe 2: Käynnistä serveri

Pitää käyttää serveriä että JSON-tiedostot toimii. Käytän Pythonia:

```bash
python -m http.server 8000
```

### Vaihe 3: Avaa selaimessa

Mene osoitteeseen:
```
http://localhost:8000/bootstrap-index.html
```

## Miten muokkaan sisältöä

### Keikkojen muokkaus

Muokkaa `data/shows.json` tiedostoa:
```json
{
  "shows": [
    {
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

### Uutisten muokkaus

Muokkaa `data/news.json` tiedostoa:
```json
{
  "news": [
    {
      "title": "Uusi albumi!",
      "date": "2024-12-01",
      "excerpt": "Lyhyt teksti...",
      "content": "Pidempi teksti...",
      "category": "release"
    }
  ]
}
```

## Tiedostot

```
Soulgrind/
│
├── bootstrap-index.html    # Pääsivu
├── style.css              # Omat CSS-tyylit
├── script.js              # JavaScript-koodi
│
├── data/                  # JSON-tiedostot
│   ├── shows.json         # Keikat
│   └── news.json          # Uutiset
│
├── images/                # Kuvat
│   ├── ALBUMIT/          # Albumikannet
│   ├── BÄNDI/            # Bändikuvat
│   └── Soulgrind logo/   # Logo
│
└── README.md             # Tämä tiedosto

(TESTAUSRAPORTTI ja ITSEARVIOINTI palautetaan myöhemmin Word-tiedostoina)
```

## Testaus

Testasin sivua:
- ✅ Eri näyttöko'oilla (tietokone, tabletti, puhelin)
- ✅ Eri selaimilla (Chrome, Firefox, Edge, Safari)
- ✅ Kaikki linkit toimii
- ✅ JSON-lataus toimii
- ✅ Kuvat latautuu

Lisää tietoa testausraportissa (palautetaan Word-tiedostona erikseen)

## Mitä opin

- Bootstrap 5 grid-systeemi
- Responsiivinen suunnittelu
- JavaScript fetch ja JSON
- Git version control
- Testaaminen eri laitteilla

Lisää itsearvioinnissa (palautetaan Word-tiedostona erikseen)

## Värien muokkaus

Jos haluat vaihtaa värejä, muokkaa `style.css` tiedoston alkua:

```css
:root {
    --primary-color: #e74c3c;      /* Punainen */
    --dark-bg: #0a0a0a;            /* Tumma tausta */
    --light-text: #ecf0f1;         /* Vaalea teksti */
}
```

## Ongelmat jotka ratkaisin

1. **JSON ei latautunut** - Piti käynnistää Python-serveri
2. **Kuvat cropattuina** - Poistin height-rajoituksen
3. **Tekstit ei näkyneet** - Lisäsin valkoisen värin
4. **Git-ongelmat** - Tein repon uudestaan oikeaan kansioon

## Tulevaisuudessa voisin lisätä

- Spotify-soittimen upotus
- Bändin jäsenten esittely
- Kuvagalleria
- Englanniksi kieliversio

## Yhteystiedot

**Soulgrind:**
- Facebook: https://facebook.com/SoulgrindFinland
- YouTube: https://youtube.com/@SoulgrindOfficial

**Projekti GitHubissa:**
- https://github.com/azhemin/Soulgrind

---

**Tehty koulutyönä 2025** 🎸