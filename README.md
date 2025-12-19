# Soulgrind - Nettisivut

Soulgrind-bändin uudet kotisivut. Tein nämä alusta asti käyttäen Bootstrap 5:ttä.

## Mitä tässä on

Tämä on Soulgrindin uudet kotisivut missä on kaikki oleellinen: diskografia, keikat, uutiset ja yhteystiedot. Yritin saada tummasta ja tyylikkäästä ulkoasusta joka sopii bändin tyyliin.

## Käytetyt teknologiat

- **HTML5** - Perussivurakenne
- **CSS3** - Tyylit ja ulkoasu
- **JavaScript** - Dynaaminen sisältö
- **Bootstrap 5.3.2** - Responsiivinen layout
- **Bootstrap Icons** - Ikonit
- **AOS 2.3.1** - Scroll-animaatiot

### Fontit
- **Cinzel** - Otsikot (Google Fonts)
- **Roboto** - Leipäteksti (Google Fonts)

### Ominaisuudet
- Tumma teema kultaisilla korostuksilla
- Responsiivinen (toimii kännykällä, tabletilla ja tietokoneella)
- Smooth scroll
- YouTube video
- JSON-datasta ladataan uutiset ja keikat

## Tiedostorakenne

```
Autius/
├── bootstrap-index.html    # Pääsivu
├── style.css              # Tyylit
├── script.js              # JavaScript-toiminnot
├── data/
│   ├── news.json         # Uutiset
│   └── shows.json        # Keikkapäivät
├── images/
│   ├── ALBUMIT/          # Albumien kansikuvat
│   ├── BÄNDI/            # Bändikuvat
│   ├── Soulgrind logo/   # Logo
│   └── AD BUCHRAM MORTEM/ # Tulevan albumin kuvat
└── README.md
```

## Miten tämä toimii

### Tarvitset
- Python 3 (serverin pyörittämiseen)
- Selaimen (Chrome, Firefox, Edge, Safari)

### Käynnistys

1. Kloonaa repo:
```bash
git clone https://github.com/azhemin/Soulgrind.git
cd Soulgrind
```

2. Käynnistä serveri:
```bash
python -m http.server 8000
```

3. Avaa selaimessa:
```
http://localhost:8000/bootstrap-index.html
```

**Huom:** Serveri on pakollinen että JSON-datat latautuu oikein.

## Sivun osiot

### 1. Etusivu (Hero)
- Isokokoinen bändikuva
- "Kuuntele" -nappi joka vie musiikkiin
- Toimii kaikilla näyttökoilla

### 2. Tietoa yhtyeestä
- Bändin historia (perustettu 1992 Helsingissä)
- Nykyinen kokoonpano
- Musiikkityyli: doom/death → gothic/black metal

### 3. Musiikki
- Uusin sinkku: "Tears of the Earth"
- Linkit Tidaliin ja Spotifyhin
- YouTube-video
- Kansikuva

### 4. Diskografia
- Kaikki julkaisut aikajärjestyksessä (1993-2010)
- 9 täyspitkää albumia
- 3 EP:tä
- Näyttää 6 albumia per rivi tietokoneella

### 5. Uutiset
- Ladataan JSON-tiedostosta
- Uusimmat julkaisut ja tiedotteet

### 6. Tulevat keikat
- Keikkakalenteri JSON-tiedostosta
- Paikka ja kaupunki
- Linkki lippuihin

### 7. Yhteystiedot
- Yhteydenottolomake
- Somet (Facebook, Spotify, YouTube)
- Sähköposti: chopper.forever@gmail.com
- Levy-yhtiö: Inverse Records

## Ulkoasu

### Värit
- **Kulta**: #e6c550 (painikkeet, aksentit)
- **Tummempi kulta**: #c9a445
- **Tumma tausta**: #0a0a0a
- **Vaalea teksti**: #ffffff
- WCAG AA yhteensopiva (hyvä kontrasti)

### Fontit
- **Otsikot**: Cinzel (metallinen tyyli)
- **Teksti**: Roboto (helppolukuinen)

### Responsiivisuus
- **Kännykkä**: < 576px (2 albumia rivillä)
- **Tabletti**: 576-991px (3 albumia rivillä)
- **Kone**: > 992px (6 albumia rivillä)

##  Datan muokkaus

### Uutisten lisäys
Muokkaa `data/news.json`:
```json
[
  {
    "title": "Otsikko",
    "date": "DD.MM.YYYY",
    "content": "Uutisen sisältö..."
  }
]
```

### Keikkojen lisäys
Muokkaa `data/shows.json`:
```json
[
  {
    "date": "DD.MM.YYYY",
    "venue": "Paikan nimi",
    "city": "Kaupunki",
    "tickets": "https://lippulinkki.fi"
  }
]
```

##  Linkit

### Striimauspalvelut
- **Spotify**: [Soulgrind](https://open.spotify.com/artist/1DF71mqpkIUsMBtGyhKkFU)
- **Tidal**: [Soulgrind](https://tidal.com/artist/4845944/u)
- **YouTube**: [Kanava](https://www.youtube.com/channel/UCj_TwZVSfffBO9x_fpJTqoA)

### Somet
- **Facebook**: [SoulgrindFinland](https://www.facebook.com/SoulgrindFinland/)

### Levy-yhtiö
- **Inverse Records**: [inverserecords.fi](https://www.inverserecords.fi)

##  Diskografia

**EP:t:**
- Santa Sangre (1993)
- Black Orchid (1994)
- March Butterfly (2010)

**Albumit:**
1. La matanza, el himno pagano (1994)
2. LADIT A.D. 1999: BIHTTPOTB (1995)
3. Whitsongs (1997)
4. Kalma (1999)
5. Elixir Mystica (2001)
6. Into the Dark Vales of Death (2002)
7. The Origins of the Paganblood (2005)
8. Pakana (2007)
9. The Tuoni Pathway (2010)

**Tulossa:**
- Ad Buchram Mortem (2026)

##  Kokoonpano

- **Lord Heikkinen** - Laulu
- **Lilith** - Kitara
- **Azhemin** - Kitara
- **JP** - Basso
- **Micko Hell** - Rummut
- **Suntio** - Koskettimet

##  Julkaisu

### GitHub Pages
Sivut on GitHubissa:
- Repo: `github.com/azhemin/Soulgrind`
- Branch: `master`

### Päivitys GitHubiin
```bash
git add .
git commit -m "Päivitys"
git push origin master
```

##  Optimoinnit

- YouTube lazy loading
- CSS-muuttujat (helppo vaihtaa värejä)
- Bootstrap ja muut kirjastot CDN:stä
- Smooth scroll
- AOS animaatiot

##  Tiedossa olevat jutut

- YouTube-video ei autoplay (selaimen käytäntö)
- Tarvii HTTP-serverin JSON-datoille (ei toimi suoraan tiedostosta)

##  Mahdollisia lisäyksiä tulevaisuudessa

- [ ] Kuvagalleria
- [ ] Lomakkeen lähetys (tarvii backendin)
- [ ] Kielivalinta (suomi/englanti)
- [ ] Albumien omat sivut
- [ ] Merch-kauppa

##  Yhteystiedot

**Tekijä**: Miika Niemelä  
**Bändin email**: chopper.forever@gmail.com  
**GitHub**: [github.com/azhemin/Soulgrind](https://github.com/azhemin/Soulgrind)

---

Tein nämä sivut Soulgrindille näyttämään bändin 30+ vuoden historian tyylikkäästi. Tiedot haettu Metal Archives -tietokannasta ja tarkistettu Inverse Recordsin kautta.
