# Muhammad Zaeem — Developer Portfolio

A modern, responsive developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Features a dark cyber-aesthetic design with smooth animations, typewriter effects, and full SEO optimization.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14.2.5 | React framework (App Router) |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4.1 | Utility-first styling |
| Framer Motion | 11 | Animations (optional) |
| Lucide React | 0.383.0 | Icon library |

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + metadata/SEO
│   │   ├── page.tsx            # Main page (assembles sections)
│   │   └── globals.css         # Global styles, CSS variables, animations
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Fixed nav with scroll highlighting
│   │   │   └── Footer.tsx      # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero with typewriter effect
│   │   │   ├── About.tsx       # Education, certs, achievements
│   │   │   ├── Skills.tsx      # Tech skill categories
│   │   │   ├── Projects.tsx    # All 6 projects grid
│   │   │   ├── Experience.tsx  # Timeline experience
│   │   │   └── Contact.tsx     # Contact cards + CTA
│   │   └── ui/
│   │       ├── SectionWrapper.tsx   # Scroll-triggered fade-in wrapper
│   │       └── SectionHeader.tsx    # Reusable section heading
│   ├── data/
│   │   └── resume.ts           # All resume data (single source of truth)
│   └── lib/
│       └── utils.ts            # cn() utility (clsx + tailwind-merge)
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** v18.17+ (LTS recommended)
- **npm** v9+ or **yarn** or **pnpm**

Check your Node version:
```bash
node --version
```

### Installation

1. **Extract the project zip** and navigate into the folder:
```bash
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```
or with yarn:
```bash
yarn install
```
or with pnpm:
```bash
pnpm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server (after build) |
| `npm run lint` | Run ESLint code checks |

---

## 🛠 Customization

### Update Resume Data
All content is in **one file**: `src/data/resume.ts`

- Edit personal info, social links, projects, skills, etc.
- Changes propagate automatically across all sections.

### Add a New Project
In `src/data/resume.ts`, add to the `projects` array:
```ts
{
  title: "Your Project",
  subtitle: "Short tagline",
  description: "Detailed description...",
  tech: ["React", "Node.js", "PostgreSQL"],
  github: "https://github.com/yourname/project",
  highlights: ["Key stat 1", "Key stat 2"],
  category: "Full-Stack",   // AI / ML | Systems | Game Dev | Full-Stack
}
```

### Change Color Theme
CSS variables are in `src/app/globals.css`:
```css
:root {
  --accent: #00d9ff;    /* Cyan — primary accent */
  --accent2: #7b61ff;   /* Purple — secondary */
  --accent3: #00ff9d;   /* Green — highlights */
  --bg: #080b14;        /* Page background */
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended — Free)
1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo → Deploy (zero config needed)

### Deploy to Netlify
```bash
npm run build
# Upload the .next folder or connect GitHub repo on netlify.com
```

### Self-host
```bash
npm run build
npm start         # Starts on port 3000
```

---

## 🔍 SEO Features

- **Metadata API** — title, description, keywords, Open Graph tags in `layout.tsx`
- **Semantic HTML** — proper `<header>`, `<main>`, `<section>`, `<footer>`
- **Font optimization** — Google Fonts loaded via `<link>` with preconnect
- **Image optimization** — Next.js Image component ready
- **Performance** — Static generation, zero client-side data fetching

---

## 🎨 Design Features

- **Dark cyber aesthetic** with grid background and ambient glow effects
- **Typewriter hero** with role cycling animation
- **Scroll-triggered fade-ins** on all sections
- **Card hover effects** with lift + glow transitions
- **Responsive** — mobile, tablet, and desktop layouts
- **Noise texture overlay** for visual depth
- **Custom scrollbar** styling
- **Monospace JetBrains Mono** for code/data elements
- **Syne display font** for headings

---

## 📄 License

This project is personal portfolio code — feel free to adapt it for your own portfolio.

---

Built with ❤️ by Muhammad Zaeem
