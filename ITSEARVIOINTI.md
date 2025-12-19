# ITSEARVIOINTI - OMAN OPPIMISEN REFLEKTOINTI
## Bootstrap 5 Responsiivinen Sivusto -projekti

**Opiskelija:** [Nimi]  
**Kurssi:** Web-ohjelmointi  
**Projekti:** Soulgrind-bändisivusto  
**Päivämäärä:** 19.12.2025

---

## 1. PROJEKTIN TAVOITTEET JA NIIDEN SAAVUTTAMINEN

### 1.1 Asetetut tavoitteet

Projektin alussa asetin itselleni seuraavat tavoitteet:

1. **Tekninen osaaminen:**
   - Oppia käyttämään Bootstrap 5 -frameworkia tehokkaasti
   - Ymmärtää responsiivisen suunnittelun periaatteet
   - Hallita JSON-datan hakeminen ja käyttö JavaScriptillä
   - Kehittää saavutettavuusosaamista

2. **Käytännön taidot:**
   - Suunnitella ja toteuttaa kokonainen verkkosivusto alusta loppuun
   - Testata sivusto monipuolisesti eri laitteilla ja selaimilla
   - Dokumentoida työ ammattimaisesti

3. **Henkilökohtainen kehitys:**
   - Parantaa ongelmanratkaisutaitoja
   - Oppia projektinhallintaa
   - Kehittää itsenäistä työskentelyä

### 1.2 Tavoitteiden saavuttaminen

| Tavoite | Saavutettu | Arvio | Perustelu |
|---------|-----------|-------|-----------|
| Bootstrap 5 hallinta | ✅ | 9/10 | Opin käyttämään gridejä, komponentteja ja utility-luokkia tehokkaasti |
| Responsiivisuus | ✅ | 10/10 | Sivusto toimii moitteettomasti kaikilla laitteilla |
| JSON & JavaScript | ✅ | 8/10 | Fetch API ja async/await hallinnassa, voisi syventyä enemmän |
| Saavutettavuus | ✅ | 9/10 | WCAG AA -taso saavutettu, opin paljon uutta |
| Projektinhallinta | ✅ | 8/10 | Aikataulu pitänyt, dokumentointi onnistunut |
| Itsenäinen työskentely | ✅ | 9/10 | Selviydyin hyvin haasteista ja löysin ratkaisuja |

**Kokonaisarvio:** Olen erittäin tyytyväinen projektiin. Saavutin kaikki asettamani tavoitteet ja opin paljon uutta.

---

## 2. OPPIMISPROSESSIN KUVAUS

### 2.1 Projektin vaiheet

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