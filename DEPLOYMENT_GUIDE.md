# Cloudflare Deployment Guide - Hono Portfolio

## ✅ What's Changed

Your portfolio has been converted to a **Hono + Tailwind CSS** stack, which is perfectly optimized for Cloudflare deployment. No more `node_modules` size issues!

## 🚀 Deploy in 5 Minutes

### Step 1: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select **Pages** from the left sidebar
3. Click **"Create a project"**
4. Choose **"Connect to Git"**

### Step 2: Authorize GitHub

1. Click **"Connect your GitHub account"**
2. Authorize Cloudflare to access your GitHub repositories
3. You'll be redirected back to Cloudflare

### Step 3: Select Your Repository

1. Search for `shweta-portfolio` repository
2. Click the repository to select it
3. Click **"Begin setup"**

### Step 4: Configure Build Settings

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Project name** | `shweta-portfolio` |
| **Production branch** | `main` |
| **Framework preset** | `None` (or `Custom`) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist/` |
| **Root directory** | `.` (or leave empty) |

✨ **Environment variables:** Leave empty for now (optional)

### Step 5: Deploy

1. Click **"Save and Deploy"**
2. Wait for the deployment to complete (usually 1-2 minutes)
3. You'll see a success message with your deployed URL like:
   ```
   https://shweta-portfolio.pages.dev
   ```

✅ **Your portfolio is now live on Cloudflare!**

---

## 🔄 Automatic Updates

From now on, whenever you push code to GitHub:
1. Cloudflare automatically detects the change
2. Triggers a new build
3. Deploys the updated site
4. Your changes go live in seconds!

---

## 📝 Making Changes

### Update Portfolio Content

**Edit:** `src/index.ts`

Find the section you want to update (About, Skills, Experience, etc.) and modify the HTML/text.

Example:
```typescript
<p class="hero-title text-3xl md:text-4xl text-secondary mb-8">
  Manager – Quality Control
</p>
```

### Customize Styling

**Edit:** `tailwind.config.js`

```javascript
colors: {
  primary: '#0f172a',    // Main background color
  secondary: '#64748b',  // Text color
  accent: '#3b82f6'      // Highlight color
}
```

### Add New Images

1. Add image file to `images/` folder
2. Reference in `src/index.ts`:
   ```html
   <img src="images/your-image.jpg" alt="Description" />
   ```
3. Push to GitHub → Auto-deploy ✨

---

## 🛠️ Local Development

Test changes locally before pushing to GitHub:

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Visit http://localhost:8787
```

Make changes and see them live in your browser. When ready:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

---

## 📊 Project Stats

- **Framework:** Hono (lightweight, fast)
- **Styling:** Tailwind CSS (utility-first)
- **Deployment:** Cloudflare Workers/Pages
- **Build Time:** < 1 minute
- **CDN:** Global (50+ data centers)
- **Custom Domain:** (Optional) $12/month with Cloudflare

---

## 🔗 Useful Links

- 📖 [Hono Docs](https://hono.dev)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com)
- ☁️ [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- 📱 [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

---

## ❓ Troubleshooting

### Build fails with "Module not found"
- Ensure all dependencies are installed: `npm install`
- Check that imports use correct file paths

### Changes not showing on Cloudflare
- Check that GitHub push was successful
- Visit Cloudflare dashboard and check deployment status
- Wait 2-3 minutes for rebuild to complete

### Images not loading
- Ensure image files are in `images/` folder
- Verify file paths in `src/index.ts` are correct
- Use relative paths like `images/photo.jpg`

---

## 🎉 Success!

Your portfolio is now deployed with:
- ✅ No size limits
- ✅ Global CDN distribution
- ✅ Automatic deployments
- ✅ Free HTTPS
- ✅ Lightning-fast performance

**Next steps:**
1. Visit your live portfolio: `https://shweta-portfolio.pages.dev`
2. Share it with colleagues and recruiters!
3. Update your GitHub profile with the link

---

Questions? Check the [README.md](./README.md) or refer to official documentation linked above.
