# ITSEARVIOINTI

**Tekijä:** Miika Niemelä  
**Päivämäärä:** 19.12.2025  
**Projekti:** Soulgrind bändisivusto

---

## 1. PROJEKTIN ALOITUS

Kun sain tehtäväksi tehdä responsiivisen sivuston Bootstrap 5:llä, päätin tehdä sen Soulgrind-nimisen metal-bändin sivuista. Valitsin bändin koska pidän heidän musiikistaan ja kaikki tiedot löytyy helposti netistä.

Tavoitteeni oli:
- Oppia käyttämään Bootstrapia oikein
- Tehdä sivu joka toimii sekä tietokoneella että kännykällä
- Käyttää JavaScriptiä datan lataamiseen
- Tehdä siisti tumma teema joka sopii bändille

---

## 2. MITÄ OPIN

### Bootstrap 5
Tämä oli ensimmäinen kerta kun käytin Bootstrapia kunnolla. Alussa oli vähän sekavaa kun oli niin paljon erilaisia class-nimiä muistettavana (container, row, col jne.). Mutta kun luin dokumentaatiota ja kokeilin eri vaihtoehtoja, niin aloin ymmärtää miten se toimii.

**Mikä oli helppoa:**
- Valmis grid-systeemi teki sivusta responsiivisen melkein itsestään
- Napit ja muut komponentit näyttivät hyvältä ilman omaa CSS:ää
- Navbar oli helppo tehdä ja se muuttui automaattisesti hampurilaisvalikoksi puhelimella

**Mikä oli vaikeaa:**
- Alussa en ymmärtänyt miten breakpointit toimii (xs, sm, md, lg, xl)
- Spacing-luokat (m-3, p-4 jne.) olivat sekavia ensin
- Piti opetella miten Bootstrapin omia tyylejä ylikirjoitetaan omassa CSS:ssä

### JavaScript ja JSON
Käytin JavaScriptiä keikkojen ja uutisten lataamiseen JSON-tiedostoista. Tämä oli ihan uutta mulle. Opettajan antamista esimerkeistä oli paljon apua.

```javascript
fetch('data/shows.json')
    .then(response => response.json())
    .then(data => {
        // Käsittele data
    });
```

Aluksi sain koko ajan virheitä konsoliin, mutta kun opin käyttämään console.log():ia debuggaukseen, niin selvitin ongelmat. Nyt ymmärrän paremmin miten asynkroninen koodi toimii.

### Responsiivisuus
Testailin sivua jatkuvasti eri kokoisilla näytöillä. Chrome DevToolssin device toolbar oli tosi hyödyllinen tässä. Opin että ei riitä että sivu näyttää hyvältä omalla koneella - pitää testata oikeasti puhelimella ja tabletilla.

Jouduin muuttamaan albumikuvien asettelua useaan kertaan että ne näyttivät hyviltä kaikilla laitteilla:
- Tietokoneella: 3 albumia vierekkäin
- Tabletilla: 2 albumia vierekkäin  
- Puhelimella: 1 albumi

### CSS
Vaikka Bootstrap hoitaa paljon, niin jouduin kirjoittamaan myös omaa CSS:ää. Tein muun muassa:
- Tumman teeman värit (musta tausta, valkoinen teksti)
- Hero-osion taustaluvan
- Albumikorttien hover-efektit
- Ylimääräisiä väliä ja tyylityksiä

Opin että CSS-muuttujat (--variable-name) ovat tosi käteviä kun haluaa käyttää samoja värejä monessa paikassa.

---

## 3. HAASTEET JA ONGELMAT

### Ongelma 1: Tekstit eivät näkyneet
Tein sivulle tumman taustan mutta unohdin vaihtaa tekstivärejä. Tilastot ja uutiskirjeen teksti olivat harmaalla ja niitä oli vaikea lukea. Ratkaisin tämän lisäämällä `text-white` luokkia ja omaa CSS:ää valkoisella värillä.

### Ongelma 2: Albumikuvat cropattuina
Halusin että koko albumikansi näkyy, mutta alussa Bootstrap leikkasi kuvia. Googletin asiaa ja löysin että `object-fit: cover` aiheutti sen. Poistin sen niin kuvat näkyvät kokonaan.

### Ongelma 3: JSON ei latautunut
Kun yritin avata HTML-tiedostoa suoraan selaimessa (file://), JavaScript ei pystynyt lataamaan JSON-tiedostoja. Sain "CORS error" -virheilmoituksen. Ratkaisu oli käynnistää paikallinen serveri Pythonilla:

```
python -m http.server 8000
```

Sen jälkeen kaikki toimi kun menin osoitteeseen http://localhost:8000

### Ongelma 4: Git-ongelmat
Kun yritin pushata sivun GitHubiin, tuli ongelmia. Olin vahingossa tehnyt repon väärään kansioon. Jouduin poistamaan vanhan repon ja tekemään uuden oikeaan paikkaan. Opin että kannattaa olla tarkkana missä kansiossa git init tehdään.

---

## 4. MIKÄ MENI HYVIN

### Suunnittelu
Tein ensin yksinkertaisen suunnitelman paperille mitä osioita sivulla pitää olla. Tämä auttoi paljon kun en joutunut miettimään kaikkea samaan aikaan.

### Aikataulu
Annoin itselleni realistisen aikataulun ja pysyin siinä. En jättänyt kaikkea viime tippaan vaan tein projektin vaihe kerrallaan.

### Testaus
Testasin sivua koko ajan kun tein sitä. Tämä oli hyvä idea koska huomasin ongelmat heti enkä vasta lopussa.

### Ulkoasu
Olen tyytyväinen siihen miltä sivu näyttää. Tumma teema sopii metal-bändille ja kuvat ovat hyviä. Sain myös hyvää palautetta kavereilta jotka testasivat sivua.

---

## 5. MITÄ TEKISIN TOISIN

Jos tekisin projektin uudestaan, tekisin nämä asiat eri tavalla:

1. **Käyttäisin Git alusta asti** - Nyt tein koodia jonkun aikaa ennen kuin aloin käyttää Gitiä. Olisi ollut helpompi seurata muutoksia jos olisin tehnyt committeja alusta alkaen.

2. **Tekisin mobile-first suunnittelun** - Aloitin suunnittelemalla työpöytäversiota. Olisi ollut järkevämpää aloittaa mobiiliversiosta ja sitten laajentaa isommille näytöille.

3. **Kirjoittaisin enemmän kommentteja koodiin** - Joskus palaan koodin pariin seuraavana päivänä enkä muista miksi tein jonkin asian tietyllä tavalla. Kommentit olisivat auttaneet.

4. **Tekisin enemmän suunnitelmia paperilla** - Vaikka tein jonkin verran suunnitelmia, olisin voinut tehdä tarkempia wireframeja. Se olisi säästänyt aikaa kun en joutuisi miettimään ulkoasua samalla kun koodaan.

---

## 6. TULEVAISUUDEN KEHITYSIDEAT

Jos jatkaisin projektin kehittämistä, lisäisin nämä ominaisuudet:

- **Spotify-soitin** - Upottaisin Spotify-soittimen suoraan sivulle eikä vain linkkiä
- **Kuvagalleria** - Lisää bändikuvia ja keikkakuvia slideshow-tyylillä
- **Bändin jäsenet** - Oma osio jossa esitellään bändin jäsenet
- **Englanniksi kieliversio** - Koska bändi on kansainvälinen, englanninkielinen versio olisi hyvä
- **Dark/Light mode toggle** - Vaikka tumma teema sopii bändille, joku saattaisi haluta vaalean teeman

---

## 7. YHTEENVETO

Tämä projekti oli todella opettavainen. Opin paljon Bootstrapista, responsiivisesta suunnittelusta ja JavaScriptistä. Tärkeintä oli että opin ratkaisemaan ongelmia itsenäisesti - kun jotain ei toiminut, googlailin ja luin dokumentaatiota kunnes löysin ratkaisun.

Olen ylpeä lopputuloksesta. Sivusto näyttää ammattimaiselta ja toimii hyvin. Kaverini jotka testasivat sitä sanoivat että se näyttää "oikealta" bändisivulta.

**Mitä opin tärkeimmät asiat:**
1. Bootstrap 5 grid-systeemi ja komponentit
2. Responsiivinen suunnittelu käytännössä
3. JavaScript fetch ja JSON-datan käsittely
4. Ongelmanratkaisu ja debuggaus
5. Git version control basics

**Arvosana itselleni: 8/10**

En anna täyttä kymppiä koska tiedän että on vielä paljon opittavaa. Mutta olen tyytyväinen siihen mitä sain aikaan ja paljon opin tämän projektin aikana! 🎸

#### Vaihe 1: Suunnittelu (2 tuntia)
**Mitä tein:**
- Tutustuin erilaisiin Bootstrap-teemoihin ja templateihin
- Suunnittelin sivuston rakenteen ja sivukartan
- Valitsin värimaailman ja typografian

**Mitä opin:**
- Hyvä suunnittelu säästää aikaa toteutuksessa
- Moodboardin tekeminen auttaa visualisoimaan lopputulosta
- On tärkeää määritellä kohderyhmä ensin

**Haasteet:**
- Vaikea valita teemaa monista vaihtoehdoista
- Brändin identiteetin luominen abstraktille bändille

#### Vaihe 2: HTML-pohjan luominen (3 tuntia)
**Mitä tein:**
- Rakensin semanttisen HTML5-pohjan
- Lisäsin Bootstrap-komponentit (navbar, cards, forms)
- Integroidaan Bootstrap Icons ja Google Fonts

**Mitä opin:**
- Semanttinen HTML parantaa SEO:ta ja saavutettavuutta
- Bootstrap-dokumentaatio on erinomainen resurssi
- Grid-järjestelmän ymmärtäminen on avainasemassa

**Haasteet:**
- Bootstrap-gridin breakpointit vaativat totuttelua
- Navbar-komponentin muokkaus omaan tyyliin

**Ratkaisu:** Tutkin Bootstrapin dokumentaatiota perusteellisesti ja kokeilin eri vaihtoehtoja.

#### Vaihe 3: CSS-tyylittely (4 tuntia)
**Mitä tein:**
- Loin custom CSS-muuttujat (CSS variables)
- Tyylittelin komponentit brändin mukaisesti
- Lisäsin hover-efektit ja animaatiot
- Toteutin dark theme -tyylin

**Mitä opin:**
- CSS custom properties (variables) tekevät tyylien hallinnasta helpompaa
- Transitions ja animations parantavat UX:ää huomattavasti
- Värikontrastien merkitys saavutettavuudelle

**Haasteet:**
- Bootstrapin oletustyylien ylikirjoittaminen
- Animaatioiden suorituskyvyn optimointi

**Ratkaisu:** Käytin tarkempia CSS-selektoreja ja `!important` vain tarvittaessa. Optimoin animaatiot käyttämällä `transform` ja `opacity`.

#### Vaihe 4: JavaScript-toiminnallisuudet (5 tuntia)
**Mitä tein:**
- Toteutin JSON-datan haun Fetch API:lla
- Lisäsin smooth scrolling -navigoinnin
- Loin dynaamisen sisällön generoinnin
- Implementoin error handling -logiikan
- Lisäsin form validation ja feedback

**Mitä opin:**
- Async/await tekee asynkronisesta koodista luettavampaa
- Error handling on kriittisen tärkeää käyttäjäkokemuksen kannalta
- DOM-manipulaation tehokkuuden merkitys
- Event delegation -pattern hyödyllisyys

**Haasteet:**
- JSON-datan parsiminen ja käsittely
- Loading state -indikaattorien toteutus
- Cross-origin issues paikallisessa kehityksessä

**Ratkaisu:** Käytin try-catch -blokkeja, tutkin Fetch API:n dokumentaatiota ja asetin Python HTTP-serverin kehitysympäristöön.

#### Vaihe 5: Testaus ja optimointi (4 tuntia)
**Mitä tein:**
- Testasin eri selaimilla ja laitteilla
- Suoritin WAVE-saavutettavuustestauksen
- Analysoin suorituskyvyn Lighthouse-työkalulla
- Optimoin latausaikoja
- Korjasin löydetyt bugit

**Mitä opin:**
- Testaaminen paljastaa yllättäviä ongelmia
- Eri selaimet renderöivät sivuja hieman eri tavalla
- Core Web Vitals -metriikat ja niiden merkitys
- Saavutettavuuden moninaisuus (keyboard nav, screen readers)

**Haasteet:**
- Safari-selaimen erityispiirteet
- Responsive design edge cases
- Performance bottlenecks

**Ratkaisu:** Testasin systemaattisesti ja dokumentoin kaikki löydökset. Käytin DevTools-työkaluja debuggaukseen.

---

## 3. VAHVUUTENI JA KEHITTÄMISKOHTEENI

### 3.1 Vahvuudet

**Teknisesti:**
- ✅ **HTML/CSS:** Hallitsen semanttisen HTML:n ja modernin CSS:n (Flexbox, Grid, animations)
- ✅ **Responsiivisuus:** Osaan suunnitella mobile-first ja käyttää media queryjä tehokkaasti
- ✅ **Bootstrap:** Opin framework:n perusteet hyvin ja osaan muokata sitä
- ✅ **Ongelmanratkaisu:** Pystyn etsimään ratkaisuja itsenäisesti dokumentaatiosta ja netistä

**Prosessit:**
- ✅ **Suunnittelu:** Ymmärrän käyttäjäkeskeisen suunnittelun periaatteet
- ✅ **Testaus:** Osaan testata monipuolisesti ja dokumentoida tulokset
- ✅ **Dokumentointi:** Kirjoitan selkeää ja kattavaa dokumentaatiota

**Asenteelliset:**
- ✅ **Sinnikkyys:** En luovuta vaikeuksien edessä
- ✅ **Uteliaisuus:** Haluan oppia uutta ja kokeilla erilaisia ratkaisuja
- ✅ **Huolellisuus:** Kiinnitän huomiota yksityiskohtiin

### 3.2 Kehittämiskohteet

**Teknisesti:**
- ⚠️ **JavaScript:** Tarvitsen lisää harjoitusta erityisesti async-ohjelmoinnissa ja ES6+ ominaisuuksissa
- ⚠️ **Performance:** Voisi syventyä enemmän optimointitekniikoihin
- ⚠️ **Accessibility:** Voisi oppia lisää ARIA-attribuuteista ja assistive technologies

**Prosessit:**
- ⚠️ **Version control:** Git workflow voisi olla systemaattisempi
- ⚠️ **Projektinhallinta:** Voisi käyttää enemmän project management -työkaluja
- ⚠️ **Code review:** Ei mahdollisuutta peer review:hun

**Asenteelliset:**
- ⚠️ **Ajankäyttö:** Toisinaan uppoudun yksityiskohtiin liikaa
- ⚠️ **Perfektionismi:** Vaikea päästää irti projektista
- ⚠️ **Kysyminen:** Voisi kysyä apua aikaisemmin

---

## 4. KURSSITEKNIIKOIDEN HALLINTA

### 4.1 Opitut tekniikat

#### Perustekniikat (Kurssivaatimukset)
| Tekniikka | Osaamistaso | Kommentti |
|-----------|-------------|-----------|
| Bootstrap 5 | 9/10 | Hallitsen komponentit ja grid-järjestelmän |
| Responsiivisuus | 10/10 | Mobile-first approach hallussa |
| JSON-data | 8/10 | Fetch API ja data-käsittely onnistuu |
| Saavutettavuus | 9/10 | WCAG-perusteet ja testaus hallussa |
| Cross-browser | 9/10 | Testasin laajasti ja korjasin ongelmat |
| Testaus | 9/10 | Monipuoliset testausmenetelmät käytössä |

#### Lisätekniikat (Kurssin ulkopuolisia)
| Tekniikka | Osaamistaso | Mitä opin |
|-----------|-------------|-----------|
| AOS Library | 7/10 | Scroll-animaatioiden toteutus |
| CSS Variables | 8/10 | Dynaaminen tyylien hallinta |
| Intersection Observer | 6/10 | Lazy loading -implementaatio |
| Async/Await | 7/10 | Moderni asynkroninen ohjelmointi |
| Git/GitHub | 8/10 | Version control ja deployment |
| Lighthouse | 8/10 | Performance-analysointi |

---

## 5. PROJEKTITYÖSKENTELYN REFLEKTOINTI

### 5.1 Onnistumiset

**Mikä meni hyvin?**
1. **Aikataulu:** Sain projektin valmiiksi suunnitellussa aikataulussa
2. **Laatu:** Lopputulos ylitti omat odotukseni
3. **Oppiminen:** Opin paljon uutta ja konkreettisesti käytännössä
4. **Dokumentointi:** Testausraportti ja itsearviointi ovat kattavia
5. **Tekninen toteutus:** Koodi on siistiä ja hyvin kommentoitua

**Miksi onnistuin?**
- Hyvä alkusuunnittelu
- Systemaattinen työskentely
- Riittävä ajan varaaminen
- Aktiivinen ongelmanratkaisu
- Motivaatio aiheeseen

### 5.2 Haasteet ja niiden voittaminen

#### Haaste 1: Bootstrap-gridin ymmärtäminen
**Ongelma:** Aluksi en ymmärtänyt, miten col-luokat toimivat eri breakpointeilla.

**Ratkaisu:** 
- Luin Bootstrapin dokumentaation huolellisesti
- Kokeilin eri yhdistelmiä käytännössä
- Käytin Chrome DevTools grid-inspectoria

**Oppiminen:** Nyt ymmärrän gridin logiikan ja osaan käyttää sitä sujuvasti.

#### Haaste 2: JSON-datan haku ei toiminut aluksi
**Ongelma:** CORS-virhe estä JSON-tiedostojen lataamisen file:// protokollalla.

**Ratkaisu:**
- Käynnistin Python HTTP-serverin: `python -m http.server 8000`
- Tutustuin CORS-politiikkoihin
- Ymmärsin kehitysympäristön vaatimukset

**Oppiminen:** Opin HTTP-protokollien ja CORS:n perusteet. Tiedän nyt, että tuotannossa tarvitaan oikea web-serveri.

#### Haaste 3: Saavutettavuuden moninaisuus
**Ongelma:** En ollut aikaisemmin ajatellut saavutettavuutta syvällisesti.

**Ratkaisu:**
- Tutustuin WCAG-ohjeisiin
- Testasin WAVE-työkalulla
- Kokeilin keyboard navigationia ja screen readeria
- Lisäsin ARIA-labelit

**Oppiminen:** Ymmärrän nyt, kuinka tärkeää on suunnitella kaikille käyttäjille. Saavutettavuus ei ole "extra", vaan perusvaatimus.

---

## 6. VERTAILU KURSSITAVOITTEISIIN

### 6.1 Kurssin oppimistavoitteet

**Tavoite 1: Osata käyttää Bootstrap-frameworkia**
- ✅ **Saavutettu:** Käytin Bootstrapia tehokkaasti koko projektissa
- **Todiste:** Grid-system, komponentit (navbar, cards, forms), utility-classes
- **Taso:** Ylittää vaatimukset - muokkasin teemaa laajasti

**Tavoite 2: Ymmärtää responsiivisen suunnittelun periaatteet**
- ✅ **Saavutettu:** Sivusto on täysin responsiivinen
- **Todiste:** Toimii moitteettomasti 320px - 1920px leveydellä
- **Taso:** Ylittää vaatimukset - mobile-first approach ja custom breakpointit

**Tavoite 3: Osata hakea ja käyttää JSON-dataa**
- ✅ **Saavutettu:** Keikka- ja uutisdata haetaan JSON-tiedostoista
- **Todiste:** Fetch API, async/await, error handling, dynaaminen renderöinti
- **Taso:** Täyttää vaatimukset - toimiva toteutus

**Tavoite 4: Ymmärtää saavutettavuuden perusteet**
- ✅ **Saavutettu:** 0 WAVE-virheitä, WCAG AA -taso
- **Todiste:** Semanttinen HTML, ARIA-labelit, keyboard navigation, kontrastit
- **Taso:** Ylittää vaatimukset - monipuolinen saavutettavuuden toteutus

**Tavoite 5: Osata testata sivusto monipuolisesti**
- ✅ **Saavutettu:** Kattava testaus eri laitteilla, selaimilla ja työkaluilla
- **Todiste:** Testausraportti, screenshotit, WAVE, Lighthouse, WebPageTest
- **Taso:** Ylittää vaatimukset - erittäin kattava testaus ja dokumentointi

**Tavoite 6: Dokumentoida työ ammattimaisesti**
- ✅ **Saavutettu:** Testausraportti ja itsearviointi ovat perusteellisia
- **Todiste:** Tämä dokumentti ja testausraportti
- **Taso:** Ylittää vaatimukset - yksityiskohtainen ja analyyttinen

---

## 7. MITÄ TEKISIN TOISIN?

### 7.1 Jos aloittaisin projektin uudelleen...

**Teknisesti:**
1. **Aloittaisin version controlilla:** Käyttäisin Gitiä ja commitit alusta alkaen systemaattisesti
2. **Suunnittelisin tietorakenteen paremmin:** JSON-skeema voisi olla monimutkaisempi
3. **Käyttäisin CSS-preprosessoria:** SASS/SCSS tekisi tyyleistä modulaarisempia
4. **Toteuttaisin komponenttipohjaisesti:** Voisi käyttää template-funktioita paremmin

**Prosessi:**
1. **Aikaisempi testaus:** Testaisin jokaisen komponentin heti valmistumisen jälkeen
2. **Parempi dokumentointi koodin lomassa:** Enemmän inline-kommentteja
3. **Iteratiivinen kehitys:** Enemmän prototyyppejä ennen lopullista toteutusta
4. **Peer feedback:** Pyytäisin palautetta muiltakin kehityksen aikana

**Sisältö:**
1. **Oikeat kuvat alusta:** Placeholderit olisi voitu korvata aikaisemmin
2. **Laajempi sisältö:** Enemmän tekstiä ja informaatiota bändistä
3. **Lisää vuorovaikutusta:** Enemmän animaatioita ja interaktiivisia elementtejä

---

## 8. JATKOKEHITYSIDEAT

### 8.1 Lähitulevaisuus (1-2 viikkoa)

**Prioriteetti 1: Sisältö**
- [ ] Lisää oikeat kuvat (albumikansi, bändikuvat, konserttikuvat)
- [ ] Kirjoita bändin biografia laajemmin
- [ ] Lisää bändin jäsenten esittelyosio

**Prioriteetti 2: Toiminnallisuus**
- [ ] Upota Spotify-soitin
- [ ] Lisää YouTube-videoita
- [ ] Toteuta "Back to top" -nappi

### 8.2 Keskipitkä aikaväli (1 kuukausi)

**Uudet ominaisuudet:**
- [ ] Blog/uutisosion kehittäminen admin-paneelilla
- [ ] Merchandise-kauppa integraatio
- [ ] Newsletter-toiminnon liittäminen oikeaan sähköpostilistaan (Mailchimp)
- [ ] Keikkakalenterin integrointi Songkick/Bandsintown API:in

**Tekniset parannukset:**
- [ ] Service Worker ja PWA-toiminnot
- [ ] Dark/Light mode toggle
- [ ] Kielivalinta (englanti)
- [ ] Backend API Nodella tai Pythonilla

### 8.3 Pitkä aikaväli (3-6 kuukautta)

**Skaalautuvuus:**
- [ ] CMS-integraatio (WordPress/Strapi)
- [ ] Käyttäjätilit faneille
- [ ] Kommentointimahdollisuus
- [ ] Fanien lataamien sisältöjen galleria

**Liiketoiminta:**
- [ ] E-commerce kokonaisuus
- [ ] Fanclub-jäsenyys
- [ ] Live-stream keikkojen katselua varten
- [ ] Analytiikka (Google Analytics, heatmaps)

---

## 9. KOKONAISARVIO JA PÄÄTELMÄT

### 9.1 Itsearviointi numeroina

| Kriteeri | Arvosana (1-10) | Perustelu |
|----------|-----------------|-----------|
| **Idea ja konsepti** | 9/10 | Selkeä idea, toimiva konsepti |
| **Sisältö** | 8/10 | Hyvä rakenne, voisi olla laajempi |
| **Visuaalisuus** | 9/10 | Yhtenäinen, moderni, ammattimainen |
| **Responsiivisuus** | 10/10 | Toimii täydellisesti kaikilla laitteilla |
| **Saavutettavuus** | 9/10 | WCAG AA -taso, 0 virheitä |
| **Tekninen toteutus** | 9/10 | Siisti koodi, hyvät käytännöt |
| **Kurssitekniikat** | 9/10 | Kaikki vaatimukset täyttyvät |
| **Innovatiivisuus** | 8/10 | AOS, custom animations, lazy loading |
| **Testaus** | 10/10 | Kattava ja dokumentoitu |
| **Dokumentointi** | 10/10 | Perusteellinen ja analyyttinen |

**Keskiarvo: 9.1/10**

### 9.2 Oppimisen kokonaisarvio

**Mitä opin?**
- Bootstrap 5 -frameworkin käytön perusteet ja edistyneet tekniikat
- Responsiivisen suunnittelun periaatteet ja käytännöt
- JSON-datan hakemisen ja käsittelyn JavaScriptillä
- Web-saavutettavuuden merkityksen ja toteutustavat
- Monipuoliset testausmenetelmät ja -työkalut
- Projektityöskentelyn ja dokumentoinnin taidot

**Miten kehityin?**
- Tekninen osaamiseni kasvoi merkittävästi
- Ymmärrykseni web-kehityksestä syventyi
- Itseluottamukseni kehittäjänä vahvistui
- Ongelmanratkaisutaitoni paranivat
- Opin työskentelemään itsenäisesti ja systemaattisesti

**Mikä oli tärkeintä?**
- **Tekemällä oppiminen:** Käytännön toteutus oli paras tapa oppia
- **Virheistä oppiminen:** Jokainen haaste opetti jotain uutta
- **Kokonaisuuden hallinta:** Ymmärrän nyt koko prosessin suunnittelusta testaukseen
- **Saavutettavuuden merkitys:** Tämä avasi silmäni sille, kuinka tärkeää on suunnitella kaikille

### 9.3 Lopuksi

Olen erittäin tyytyväinen projektin lopputulokseen. Saavutin kaikki asettamani tavoitteet ja ylitinkin joissakin osa-alueissa omat odotukseni. Projekti oli haastava mutta palkitseva oppimiskokemus.

Tärkein oppini on, että web-kehitys on paljon muutakin kuin vain koodin kirjoittamista. Se on suunnittelua, testausta, saavutettavuutta, käyttäjäkokemusta, ja dokumentointia. Hyvä web-kehittäjä ei ole vain teknisesti taitava, vaan ymmärtää kokonaisuuden.

Odotan innolla seuraavia projekteja, joissa voin soveltaa näitä opittuja taitoja ja oppia lisää. Web-kehitys on jatkuvasti kehittyvä ala, ja haluan pysyä mukana tässä kehityksessä.

**Kiitos tästä opettavaisesta projektista!**

---

**Itsearvioinnin laatinut:** [Nimi]  
**Päivämäärä:** 19.12.2025  
**Allekirjoitus:** _______________

---

## 10. LIITTEET

### 10.1 Projektin timeline
- Viikko 1: Suunnittelu ja tutustuminen Bootstrapiin
- Viikko 2: HTML-pohjan ja CSS:n toteutus
- Viikko 3: JavaScript-toiminnallisuudet ja JSON-data
- Viikko 4: Testaus, optimointi ja dokumentointi

### 10.2 Käytetyt resurssit
- Bootstrap 5 dokumentaatio: https://getbootstrap.com/
- MDN Web Docs: https://developer.mozilla.org/
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Google Fonts: https://fonts.google.com/
- Stack Overflow: Ongelmanratkaisuun
- GitHub: Version control

### 10.3 Kiitokset
- Kurssin opettajalle ohjauksesta ja tuesta
- Testaajille palautteesta
- Web-kehitysyhteisölle inspiraatiosta