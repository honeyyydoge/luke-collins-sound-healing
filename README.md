# Luke Collins Sound Healing Website

A mystical, galaxy-themed website for sound healing sessions.

## 🎵 Features

- Galaxy background with animated stars
- Responsive design (mobile-first)
- Booking calendar integration (Cal.com ready)
- Events listing
- Services/pricing cards
- Contact section with Google Maps

## 📁 Structure

```
luke-collins-sound-healing/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Stars animation + interactions
├── assets/
│   ├── logo-bowls.png  # Logo (gongs/bowls image)
│   └── banner.jpg      # Banner photo
└── README.md
```

## 🚀 Quick Start

1. **Add images to `/assets/`:**
   - `logo-bowls.png` - Extract gongs/bowls from flyer (transparent background)
   - `banner.jpg` - Banner photo (1920x600px recommended)
   - `luke.jpg` - Photo of Luke (optional)

2. **Update contact info in `index.html`:**
   - Email address
   - Instagram handle
   - Google Maps embed URL

3. **Set up booking (Cal.com - free):**
   - Create account at [cal.com](https://cal.com)
   - Create event type "Sound Healing Session"
   - Copy embed code → paste in booking section
   - (Instructions in HTML comments)

## 🎫 Event Tickets Setup (Stripe)

Stripe handles ticket sales with inventory limits (max participants).

### Initial Setup
1. Create account at [stripe.com](https://stripe.com)
2. Complete verification (for payouts)

### Add a New Event
1. **Dashboard** → **Products** → **Add Product**
2. Fill in:
   - Name: "Lunar New Year Sound Journey - Single"
   - Price: $50 (one-time)
   - Image: Upload event image
3. **Inventory**: Check "Track quantity" → Set limit (e.g. 10)
4. Save product

### Create Payment Link
1. **Products** → Select your product
2. Click **Create payment link**
3. Customize success message
4. Copy the link
5. Paste in `index.html` (replace `href="#"` in ticket buttons)

### Change Max Participants
Dashboard → Products → Select product → Edit → Inventory → Update quantity

### Track Sales
Dashboard → Payments (see all purchases + customer emails)

---

## 📅 Private Sessions (Cal.com)

Use Cal.com for private 1-on-1 bookings (calendar-based).

1. Go to [cal.com](https://cal.com) and create free account
2. Create event type: "Private Sound Healing Session" - $120, 60min
3. Get embed code: Settings → Embed → Inline
4. Replace placeholder in booking section of `index.html`

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Free)
```bash
# Drag & drop the folder to netlify.com/drop
# Or connect to GitHub for auto-deploys
```

### Option 2: Vercel (Free)
```bash
npm i -g vercel
cd luke-collins-sound-healing
vercel
```

### Option 3: GitHub Pages (Free)
1. Create GitHub repo
2. Push files
3. Settings → Pages → Deploy from main branch

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Space | `#0a1628` | Background |
| Nebula Purple | `#6b4984` | Accents |
| Cosmic Teal | `#1a3a4a` | Secondary |
| Golden Bronze | `#c4a35a` | Primary accent |
| Cream | `#f5f0e6` | Text |

## 📝 Customization

### Change colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-gold: #c4a35a;
    --color-nebula: #6b4984;
    /* etc */
}
```

### Add more events
Copy the `.event-card` template in `index.html` and update details.

### Add more services
Copy a `.service-card` div and customize.

## 🔧 Tech Stack

- **Frontend:** Pure HTML/CSS/JS (no framework needed)
- **Booking:** Cal.com (free, handles payments)
- **Hosting:** Netlify/Vercel (free tier)
- **Fonts:** Google Fonts (Cormorant Garamond + Raleway)

Total cost: **$0** (or ~$15/year for custom domain)

---

Made for Luke Collins Sound Healing ✨
