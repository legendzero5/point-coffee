# ☕ Aroma Café - Installation & Setup Guide

## 📦 Required Dependencies

Run this command to install all necessary packages:

```bash
npm install tailwindcss postcss autoprefixer framer-motion aos react-scroll lucide-react @tsparticles/react @tsparticles/slim react-scroll-parallax
```

### Packages Breakdown:

1. **tailwindcss, postcss, autoprefixer** - CSS framework
2. **framer-motion** - Animations and transitions
3. **aos** - Animate on scroll
4. **react-scroll** - Smooth scrolling navigation
5. **lucide-react** - Modern icon set
6. **@tsparticles/react, @tsparticles/slim** - Particle effects
7. **react-scroll-parallax** - Parallax scrolling effects

## 🚀 Quick Start

1. Install dependencies (command above)

2. Start development server:

```bash
npm run dev
```

3. Open browser to `http://localhost:5173`

## ✨ Features Implemented

### ✅ All Core Sections

- Hero with parallax & particles
- Stats with animated counters
- About with image gallery
- Interactive filterable menu
- Testimonials carousel
- Location with map
- Comprehensive footer
- Navbar with scroll effects
- Scroll progress bar

### ✅ Animations

- Framer Motion micro-interactions
- AOS scroll animations
- Parallax effects
- Hover states and transitions
- Magnetic button effects (via CSS)
- Stagger animations
- Auto-play carousel

### ✅ Bonus Features

- WhatsApp floating button
- Real-time open/closed status
- Newsletter subscription form
- Glassmorphism design
- Custom scrollbar
- Scroll to top button
- Mobile responsive menu
- Dark theme

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  coffee: {
    500: '#YOUR_COLOR',
    // ...
  },
}
```

### Update Menu Items

Edit `src/components/Menu.jsx` - update the `menuItems` array

### Change Contact Info

Edit `src/components/Location.jsx` - update `contactInfo` array

### Modify Testimonials

Edit `src/components/Testimonials.jsx` - update `testimonials` array

### WhatsApp Number

Edit `src/components/WhatsAppButton.jsx`:

```javascript
const phoneNumber = "1234567890"; // Your number
```

## 📱 Component Structure

```
App.jsx (Main container)
├── ScrollProgress
├── Navbar
├── Hero (Parallax + Particles)
├── Stats (Animated counters)
├── About (Image gallery)
├── Menu (Filterable grid + Modal)
├── Testimonials (Carousel)
├── Location (Map + Contact)
├── Footer
└── WhatsAppButton
```

## 🔧 Build for Production

```bash
npm run build
```

Output will be in `dist/` folder, ready to deploy!

## 🌐 Deployment Options

- **Vercel:** `vercel --prod`
- **Netlify:** Drag & drop `dist` folder
- **GitHub Pages:** Use `gh-pages` package
- **Firebase:** `firebase deploy`

## 💡 Tips

1. Replace Unsplash image URLs with your own optimized images
2. Update Google Maps embed with your actual location
3. Connect newsletter form to email service (e.g., Mailchimp API)
4. Add your social media links in Footer.jsx
5. Consider adding React Helmet for SEO meta tags

## 🐛 Troubleshooting

**If animations don't work:**

- Make sure AOS CSS is imported: `import 'aos/dist/aos.css'`
- Check that ParallaxProvider wraps the app

**If Tailwind styles don't apply:**

- Verify `@tailwind` directives are in index.css
- Check tailwind.config.js content paths

**Build errors:**

- Delete node_modules and package-lock.json
- Run `npm install` again
- Clear Vite cache: `rm -rf .vite`

## 📊 Performance

- Lighthouse Score Target: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

**Optimization tips:**

- Use WebP format for images
- Enable lazy loading
- Minify production build
- Use CDN for assets

Enjoy building with Aroma Café! ☕
