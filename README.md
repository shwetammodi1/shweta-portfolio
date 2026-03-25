# Shweta Gupta - Professional Portfolio

A modern, responsive portfolio website built with **Hono** framework and **Tailwind CSS**, optimized for deployment on **Cloudflare Pages/Workers**.

## Tech Stack

- **Framework:** Hono (Lightweight web framework for Cloudflare Workers)
- **Styling:** Tailwind CSS (Utility-first CSS framework)
- **Deployment:** Cloudflare Pages / Workers
- **Language:** TypeScript
- **Build Tool:** Wrangler CLI

## Features

✨ Modern, responsive design with Tailwind CSS  
⚡ Fast performance with Hono framework  
☁️ Easy Cloudflare deployment  
📱 Mobile-first approach  
🎨 Customizable component structure  
🔧 TypeScript support  

## Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Wrangler CLI (`npm install -g @cloudflare/wrangler`)

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:8787
```

### Build

```bash
npm run build
```

## Deployment to Cloudflare Pages

### Option 1: Automatic Deployment (Recommended)

1. **Connect GitHub Repository**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages**
   - Click **"Create a project"** → **"Connect to Git"**
   - Select your GitHub repository: `shweta-portfolio`

2. **Configure Build Settings**
   - **Framework**: None (or Custom)
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist/`
   - **Environment Variables**: (if needed)

3. **Deploy**
   - Click **"Save and Deploy"**
   - Cloudflare will automatically deploy on every GitHub push

### Option 2: Manual Deployment with Wrangler

```bash
# Authenticate with Cloudflare
wrangler login

# Deploy to Cloudflare Workers
wrangler deploy

# Or deploy to Pages
npm run deploy
```

## Project Structure

```
shweta-portfolio/
├── src/
│   └── index.ts          # Main Hono application
├── images/               # Static images
├── css/                  # Additional CSS (optional)
├── js/                   # JavaScript files
├── package.json          # Dependencies
├── wrangler.toml         # Cloudflare configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Environment Configuration

Edit `wrangler.toml` to configure:
- Worker name
- Cloudflare account ID
- Route patterns
- Environment variables

## Performance Optimizations

- 🚀 Minified production builds
- 📦 Lazy loading of components
- 🎯 SEO-friendly HTML structure
- 📱 Responsive design
- ⚡ Cached static assets

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#0f172a',      // Change primary color
  secondary: '#64748b',    // Change secondary color
  accent: '#3b82f6'        // Change accent color
}
```

### Content
Modify `src/index.ts` to update portfolio content, sections, and styling.

### Fonts
Update Google Fonts link in the HTML head section.

## Support & Issues

For issues or questions, refer to:
- [Hono Documentation](https://hono.dev)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Tailwind CSS Docs](https://tailwindcss.com)

## License

UNLICENSED - Private Portfolio

---

**Built with ❤️ for Shweta Gupta**  
Deployed on Cloudflare Global Network

---

## ▶ Run Locally (on your computer)

```
node server.js
```
Then open: **http://localhost:3000**

Or using npm:
```
npm start
```

---

## 🌐 Share on Local Network (same Wi-Fi)

When the server starts, it shows a **Network URL** like:
```
http://192.168.1.x:3000
```
Share that URL with anyone on the **same Wi-Fi** — they can view it on their phone or laptop.

---

## 🚀 Deploy Live (Free – Netlify)

1. Go to **https://netlify.com** → Sign up free
2. Click **"Add new site" → "Deploy manually"**
3. **Drag and drop** the entire `Shweta Gupta` folder onto the page
4. Netlify gives you a live URL like: `https://shweta-gupta.netlify.app`
5. You can set a custom domain if needed

---

## 🚀 Deploy Live (Free – Vercel)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` inside this folder
3. Follow the prompts — your site goes live in seconds

---

## 📁 File Structure

```
Shweta Gupta/
├── index.html          ← Main HTML file
├── server.js           ← Local dev server (Node.js)
├── package.json        ← Project config
├── css/
│   └── styles.css      ← All styles
├── js/
│   └── main.js         ← All JavaScript
└── images/
    └── shweta-gupta.jpg ← Profile photo
```
=======
# shweta-portfolio
Portfolio website project
>>>>>>> be35c2da0af399ad41eace517056cdcba650625f
