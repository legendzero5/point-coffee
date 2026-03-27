# ☕ QUICK START GUIDE

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies

Run ONE of these commands:

**Option A - All at once (Recommended):**

```bash
npm install tailwindcss postcss autoprefixer framer-motion aos react-scroll lucide-react @tsparticles/react @tsparticles/slim react-scroll-parallax
```

**Option B - Use the quick-start script:**

```bash
chmod +x quick-start.sh
./quick-start.sh
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Navigate to: **http://localhost:5173**

---

## ✨ What You'll See

✅ **Hero Section** - Parallax background with floating particles  
✅ **Stats** - Animated counters  
✅ **About** - Story with image gallery  
✅ **Menu** - Filterable products with modal  
✅ **Testimonials** - Auto-playing carousel  
✅ **Location** - Google Maps + contact info  
✅ **Footer** - Newsletter + social links  
✅ **WhatsApp Button** - Floating action button

---

## 🎨 Customize

### Change Colors

Edit `tailwind.config.js`:

```javascript
coffee: {
  500: '#YOUR_COLOR',
}
```

### Update Content

- **Menu items:** `src/components/Menu.jsx`
- **Testimonials:** `src/components/Testimonials.jsx`
- **About text:** `src/components/About.jsx`
- **Contact:** `src/components/Location.jsx`

### Set WhatsApp Number

Edit `src/components/WhatsAppButton.jsx`:

```javascript
const phoneNumber = "1234567890";
```

---

## 📱 Features Included

✅ Fully responsive (mobile, tablet, desktop)  
✅ Smooth animations (Framer Motion, AOS)  
✅ Parallax effects  
✅ Particle effects  
✅ Interactive menu filtering  
✅ Auto-play carousel  
✅ Google Maps integration  
✅ Newsletter form  
✅ WhatsApp integration  
✅ Scroll progress bar  
✅ Glassmorphism design

---

## 🏗️ Build for Production

```bash
npm run build
```

Output: `dist/` folder ready to deploy!

---

## 📚 Documentation

- **Complete guide:** `SETUP-GUIDE.md`
- **Full summary:** `PROJECT-SUMMARY.md`
- **Dependencies:** `DEPENDENCIES.json`

---

## 🆘 Troubleshooting

**Animations not working?**
→ Make sure all dependencies installed correctly

**Tailwind styles not applying?**
→ Check that `index.css` has `@tailwind` directives

**Build errors?**
→ Try: `rm -rf node_modules package-lock.json && npm install`

---

**That's it! Happy coding! ☕✨**
