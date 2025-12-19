# Soulgrind - Official Website

Modern, responsive website for Finnish gothic/black metal band Soulgrind. Built from scratch with Bootstrap 5 framework.

## 🎸 About The Project

This is a complete redesign of Soulgrind's official band website, featuring their discography, upcoming shows, news, and contact information. The site showcases 30+ years of Finnish metal history with a dark, atmospheric design that matches the band's aesthetic.

## 🛠️ Technologies Used

### Frontend Stack
- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with CSS variables
- **JavaScript (ES6)** - Dynamic content loading
- **Bootstrap 5.3.2** - Responsive grid and components
- **Bootstrap Icons 1.11.1** - Icon library
- **AOS 2.3.1** - Scroll animation library

### Fonts
- **Cinzel** (Google Fonts) - Headlines
- **Roboto** (Google Fonts) - Body text

### Design Features
- Dark theme with gold accents (#8a7028)
- Fully responsive layout (mobile-first)
- Smooth scroll navigation
- Lazy-loaded YouTube embed
- Dynamic JSON data loading

## 📁 Project Structure

```
Autius/
├── bootstrap-index.html    # Main HTML file
├── style.css              # Custom styles
├── script.js              # JavaScript functionality
├── data/
│   ├── news.json         # News feed data
│   └── shows.json        # Concert dates data
├── images/
│   ├── ALBUMIT/          # Album covers (1-9.jpg, SINGLE 1-3.jpg)
│   ├── BÄNDI/            # Band photos
│   ├── Soulgrind logo/   # Band logo
│   └── AD BUCHRAM MORTEM/ # Upcoming album artwork
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Python 3.x (for local server)
- Modern web browser (Chrome, Firefox, Edge, Safari)

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/azhemin/Soulgrind.git
cd Soulgrind
```

2. Start a local HTTP server:
```bash
python -m http.server 8000
```

3. Open your browser and navigate to:
```
http://localhost:8000/bootstrap-index.html
```

**Note:** A local server is required for JSON data loading due to CORS restrictions.

## 📄 Page Sections

### 1. Hero Section
- Full-screen hero image with band photo
- Call-to-action button linking to music section
- Responsive typography

### 2. About Section
- Band history and background (established 1992)
- Current lineup with member names and instruments
- Evolution from doom/death to gothic/black metal

### 3. Music Section
- Featured single: "Tears of the Earth"
- Direct links to Tidal and Spotify
- Embedded YouTube music video
- Album artwork showcase

### 4. Discography
- Complete chronological discography (1993-2010)
- 9 full-length albums
- 3 EPs
- Responsive card layout (6 per row on desktop)
- Album covers with release years

### 5. News Section
- Dynamic news feed loaded from JSON
- Latest releases and announcements
- Band updates and milestones

### 6. Upcoming Shows
- Concert calendar loaded from JSON
- Venue and city information
- Ticket purchase links

### 7. Contact Section
- Contact form (Name, Email, Subject, Message)
- Social media links (Facebook, Spotify, YouTube)
- Email: chopper.forever@gmail.com
- Record label information (Inverse Records)

## 🎨 Design Choices

### Color Palette
- **Primary Gold**: #8a7028 (buttons, accents)
- **Hover Gold**: #9d7f30
- **Dark Background**: #0a0a0a
- **Secondary Dark**: #2c2c2c
- **Light Text**: #f5f5f5

### Typography Hierarchy
- **H1-H6**: Cinzel serif font (metal aesthetic)
- **Body**: Roboto sans-serif (readability)
- **Letter spacing**: Increased for dramatic effect

### Responsive Breakpoints
- **Mobile**: < 576px (2 albums per row)
- **Tablet**: 576-991px (3 albums per row)
- **Desktop**: > 992px (6 albums per row)

## 📊 Data Management

### Adding News Items
Edit `data/news.json`:
```json
[
  {
    "title": "News headline",
    "date": "DD.MM.YYYY",
    "content": "News content..."
  }
]
```

### Adding Concert Dates
Edit `data/shows.json`:
```json
[
  {
    "date": "DD.MM.YYYY",
    "venue": "Venue Name",
    "city": "City",
    "tickets": "https://ticketlink.com"
  }
]
```

## 🔗 External Links

### Streaming Platforms
- **Spotify**: [Artist Page](https://open.spotify.com/artist/1DF71mqpkIUsMBtGyhKkFU)
- **Tidal**: [Artist Page](https://tidal.com/artist/4845944/u)
- **YouTube**: [Channel](https://www.youtube.com/channel/UCj_TwZVSfffBO9x_fpJTqoA)

### Social Media
- **Facebook**: [SoulgrindFinland](https://www.facebook.com/SoulgrindFinland/)

### Record Label
- **Inverse Records**: [Website](https://www.inverserecords.fi)

## 🎵 Discography Timeline

**EPs:**
- Santa Sangre (1993)
- Black Orchid (1994)
- March Butterfly (2010)

**Full-Length Albums:**
1. La matanza, el himno pagano (1994)
2. LADIT A.D. 1999: BIHTTPOTB (1995)
3. Whitsongs (1997)
4. Kalma (1999)
5. Elixir Mystica (2001)
6. Into the Dark Vales of Death (2002 - 75% rating)
7. The Origins of the Paganblood (2005)
8. Pakana (2007)
9. The Tuoni Pathway (2010 - 92% rating)

**Upcoming:**
- Ad Buchram Mortem (2026)

## 👥 Current Lineup

- **Lord Heikkinen** - Vocals
- **Lilith** - Guitar
- **Azhemin** - Guitar
- **JP** - Bass
- **Micko Hell** - Drums
- **Suntio** - Keyboards

## 🌐 Deployment

### GitHub Pages
The site is deployed via GitHub Pages:
- Repository: `github.com/azhemin/Soulgrind`
- Branch: `main`
- URL: [Coming soon]

### Deployment Steps
```bash
git add .
git commit -m "Update website"
git push origin main
```

## ⚡ Performance Optimizations

- Lazy loading for YouTube iframe
- CSS variable system for easy theme changes
- Minified external libraries via CDN
- Optimized image sizes
- Smooth scroll performance
- AOS animations with 800ms duration

## 🐛 Known Issues

- YouTube video requires user interaction to play (browser autoplay policies)
- JSON files require HTTP server (can't run with file:// protocol)

## 📝 Future Enhancements

- [ ] Add photo gallery section
- [ ] Implement actual form submission (backend required)
- [ ] Add language switcher (Finnish/English)
- [ ] Create album detail pages
- [ ] Add merch store integration

## 📧 Contact

**Project Maintainer**: Miika Niemelä  
**Band Email**: chopper.forever@gmail.com  
**Repository**: [github.com/azhemin/Soulgrind](https://github.com/azhemin/Soulgrind)

## 📜 License

© 2024 Soulgrind. All rights reserved.  
All music, images, and content are property of Soulgrind and Inverse Records.

---

**Note**: This website was built as a modern, professional representation of Soulgrind's 30+ year legacy in the Finnish metal scene. All band information sourced from official Metal Archives database and verified through Inverse Records.
