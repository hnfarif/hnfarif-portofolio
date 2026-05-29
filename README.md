# Hanif Arif — Premium Personal Portfolio Website

A cinematic, premium personal portfolio website designed for **Hanif Arif** (Backend Engineer & Full-Stack Developer), inspired by design leaders like Vercel, Linear, Stripe, and Apple. 

Developed using **React.js + Vite + Tailwind CSS (v4) + Framer Motion**.

---

## 🚀 Design & Aesthetic Pillars
- **Cinematic Dark Mode**: Rich `#030014` deeply dark backdrop with glowing, slow-drifting neon radial gradients (violet, indigo, emerald).
- **Geometric Grid Overlay**: Fine, clean responsive background lines mimicking modern engineering dashboards.
- **tactile Interactive Elements**: A custom springy Button component supporting hover backdrop shimmer effects and click scale deflections.
- **Interactive Project Console**: Moving away from standard card layouts, it features a split-screen browser navigator where recruiters can click to inspect granular database designs, API metrics, and contributions.
- **Infinite Stack Marquees**: Twin offset scrolling ribbons displaying languages, DevOps frameworks, database layers, and messaging engines.
- **Glassmorphism Detail Cards**: Translucent backdrop panels incorporating custom outer border gradient strokes.

---

## 🛠️ Tech Stack & Engineering Choices
- **React 19 & Vite 8**: Modern, ultra-fast scaffolding with Rolldown compilation.
- **Tailwind CSS v4 & PostCSS**: Custom `@config` mapping to modular theme layers and responsive configurations.
- **Framer Motion**: Coordinate physics-based spring curves, staggered mount displays, and transition states.
- **Lucide Icons**: SVG vector graphics providing visual representation for coding categories and contact links.
- **SEO & Accessibility**: Clean semantic HTML5 elements, descriptive meta titles, page index descriptors, and viewport configurations.

---

## 📂 Project Structure
```text
├── public/
│   └── CV_ATS_Hanif_Arif_2026_updated.pdf  # Static download link served directly
├── src/
│   ├── components/
│   │   ├── Button.jsx            # Custom spring buttons (primary, secondary, text)
│   │   ├── GridBackground.jsx    # Drifting background neon orbs and grid lines
│   │   ├── Header.jsx            # Sticky blurred nav banner with mobile drawer toggle
│   │   ├── InfiniteMarquee.jsx   # Infinite loop scrolling skills track
│   │   └── Section.jsx           # Layout section wrapper with scroll-reveal events
│   ├── data/
│   │   └── cvData.js             # Consolidated source of truth for CV data
│   ├── sections/
│   │   ├── About.jsx             # Bio, engineering philosophy & academic pillars
│   │   ├── Contact.jsx           # Clipboard copying helpers & interactive submit form
│   │   ├── Footer.jsx            # Links, copyright, and smooth back-to-top trigger
│   │   ├── Hero.jsx              # Heading declarations, stats cards & primary CTA
│   │   ├── Projects.jsx          # Interactive Project Browser console
│   │   ├── Skills.jsx            # Custom categorized expertise badges
│   │   └── TechMarquee.jsx       # Side-scrolling double ribbon divider
│   ├── App.jsx                   # Component coordinator
│   ├── index.css                 # Global styles, scrollbar styling & Tailwind imports
│   └── main.jsx                  # Virtual DOM root mounter
├── package.json
├── postcss.config.js             # PostCSS v4 configuration
├── tailwind.config.js            # Custom keyframes and animations mappings
└── vite.config.js                # Build tool configuration
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### 2. Install Dependencies
Clone the repository, enter the directory, and install the modules:
```bash
npm install
```

### 3. Start Development Server
Launch the local Hot-Module-Replacement development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
Bundle and compress assets for production hosting:
```bash
npm run build
```
This compiles the application and outputs files inside the `/dist` directory.

---

## 🌐 Deployment to Vercel (Vercel-Ready)

The project is fully pre-configured and optimized to run on **Vercel** with a single click.

### Method 1: Git Integration (Recommended)
1. Commit the source code to a public or private GitHub/GitLab repository.
2. Log into your [Vercel Dashboard](https://vercel.com).
3. Click **Add New** > **Project** and import your repository.
4. Vercel will automatically detect **Vite** as the framework preset.
5. Keep default settings and click **Deploy**. Vercel will build the React site and provision a production SSL domain.

### Method 2: Vercel CLI
If you prefer deploying directly from your local shell:
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command from the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to link your account, setup a project, and upload the build.
4. For production promotion, run:
   ```bash
   vercel --prod
   ```

---

## ✏️ Customization & Maintenance
All data is stored inside a single file: `src/data/cvData.js`. 

To update text, add new roles, modify achievements, or change links, simply edit the records in this module. The UI will dynamically re-render the changes across all components.
