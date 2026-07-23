# 🚀 Namabathula Saroj — AI Engineer Portfolio

> A premium, production-ready portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed to impress recruiters at top AI companies.

![Portfolio Preview](https://sarojnamabathula.vercel.app/)

## ✨ Features

### Design
- 🌌 **Aurora gradient background** with mouse parallax
- 🔮 **Glassmorphism** cards and navbar
- 🎯 **Custom animated cursor** with smooth follower
- 🌈 **Gradient text** with animated color shift
- 💫 **Micro-animations** on every interactive element
- 🃏 **3D flip cards** for certifications
- 📈 **Animated skill progress bars** with shimmer
- 🎠 **Card hover lift** with glow effects

### Functionality
- ⌨️ **Command Palette** (`Ctrl+K` / `⌘K`) for quick navigation
- 📜 **Scroll progress indicator** at top of page
- 🔝 **Scroll-to-top** floating button
- 📱 **Fully responsive** — mobile, tablet, desktop, ultra-wide
- 🌙 **Dark theme** (optimized)
- 🔍 **Project search & filter** by category
- 📋 **Project detail modal** with full specs
- ✉️ **Contact form** with animated states

### SEO & Performance
- 🏆 **Full SEO metadata** (OpenGraph, Twitter cards)
- 📊 **JSON-LD structured data** (Person schema)
- 🗺️ **Robots.txt** configured
- ♿ **ARIA labels** and semantic HTML
- ⚡ **Next.js Image optimization**
- 🎯 **Lazy loading** for all sections

## 🗂️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page assembly
│   └── globals.css         # Design system (Tailwind v4 @theme)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Glassmorphism sticky navbar
│   │   ├── CommandPalette.tsx   # Ctrl+K command palette
│   │   ├── CustomCursor.tsx     # Custom animated cursor
│   │   ├── LoadingScreen.tsx    # AI-themed loading screen
│   │   ├── ScrollProgress.tsx   # Top progress bar
│   │   └── ScrollToTop.tsx      # FAB scroll button
│   └── sections/
│       ├── Hero.tsx             # Hero with typing + aurora
│       ├── About.tsx            # Story, mission, stats
│       ├── Skills.tsx           # Tabbed skill categories
│       ├── Projects.tsx         # Cards + search + modal
│       ├── Experience.tsx       # Animated timeline
│       ├── Certifications.tsx   # 3D flip cards
│       ├── Achievements.tsx     # Milestone cards
│       ├── GitHubSection.tsx    # GitHub profile + repos
│       ├── Resume.tsx           # Download + viewer
│       ├── Contact.tsx          # Animated contact form
│       └── Footer.tsx           # Glassmorphism footer
├── config/
│   └── site.ts             # ← UPDATE YOUR PERSONAL INFO HERE
├── data/
│   ├── projects.ts         # All 8 projects
│   ├── skills.ts           # Skill categories + levels
│   ├── experience.ts       # Work experience
│   ├── certifications.ts   # 10 certifications
│   └── achievements.ts     # Key achievements
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    ├── profile.jpg         # Your profile photo
    ├── resume.pdf          # ← ADD YOUR RESUME HERE
    ├── robots.txt
    └── site.webmanifest
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone or open the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Personalization

### 1. Update Personal Info
Edit `config/site.ts` to update your name, links, and bio.

### 2. Add Your Resume
Place your resume PDF at `public/resume.pdf`.

### 3. Update Projects
Edit `data/projects.ts` to add/update project descriptions, GitHub links, and demo URLs.

### 4. Update Certifications
Edit `data/certifications.ts` to add verification URLs.

### 5. Enable Contact Form (EmailJS)
In `components/sections/Contact.tsx`, replace the placeholder with your EmailJS credentials:

```typescript
import emailjs from '@emailjs/browser';

// Replace with your actual IDs:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID', 
  form,
  'YOUR_PUBLIC_KEY'
);
```

Get free credentials at [emailjs.com](https://www.emailjs.com/).

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

### Environment Variables (Optional)

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | Framework, SSR, Image optimization |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility styling |
| **Framer Motion** | All animations |
| **React Type Animation** | Typing effect in hero |
| **Lucide React** | Icons |
| **React Icons** | Extended icon set |
| **EmailJS** | Contact form (no backend) |
| **next-themes** | Theme management |

## 📱 Sections

| Section | Description |
|---|---|
| Hero | Animated intro with typing roles and profile photo |
| About | Story, mission, vision, stats, and drives |
| Skills | 6 categories with animated progress bars |
| Projects | 8 AI/Full-Stack projects with search and modal |
| Experience | IBM SkillsBuild internship timeline |
| Certifications | 10 flip cards from IBM & Google Cloud |
| Achievements | Key milestones and recognition |
| GitHub | Language stats, pinned repositories |
| Resume | Download + embedded viewer placeholder |
| Contact | Animated form with EmailJS integration |

## 🎨 Color Palette

```
Primary:  #6366f1 (Indigo)
Secondary: #8b5cf6 (Purple)
Accent:   #06b6d4 (Cyan)
Background: #000000 (Black)
Surface:  rgba(255,255,255,0.03) (Glassmorphism)
```

## ♿ Accessibility

- Semantic HTML5 elements throughout
- ARIA labels on all interactive elements
- Keyboard navigation support
- `prefers-reduced-motion` support
- Color contrast meets WCAG AA standards

## 📄 License

MIT License — feel free to fork and customize for your own portfolio.

---

Built with ❤️ by **Namabathula Saroj** — [GitHub](https://github.com/Sarojnamabathula) · [LinkedIn](https://www.linkedin.com/in/saroj-namabathula/)
