/**
 * Shweta Gupta Portfolio - Development Server
 * Serves static HTML/CSS/JS files for local development
 * Ready for Cloudflare Pages deployment
 * Status: ✅ Production Ready - 2026-03-25
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// HTML template with embedded Tailwind CSS
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Shweta Gupta – Manager Quality Control, 23+ years in pharmaceutical QC/QA." />
  <title>Shweta Gupta | Manager – Quality Control</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/styles.css" />
  <style>
    body { font-family: 'Poppins', sans-serif; }
  </style>
</head>
<body class="bg-slate-900 text-white">

  <!-- ===== NAVBAR ===== -->
  <header class="navbar fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#hero" class="flex items-center gap-2 nav-logo">
        <span class="text-2xl font-bold text-blue-500">SG</span>
        <span class="text-lg font-semibold">Shweta Gupta</span>
      </a>
      <nav class="hidden md:flex gap-8 nav-links">
        <a href="#about" class="hover:text-blue-400 transition">About</a>
        <a href="#skills" class="hover:text-blue-400 transition">Skills</a>
        <a href="#experience" class="hover:text-blue-400 transition">Experience</a>
        <a href="#achievements" class="hover:text-blue-400 transition">Achievements</a>
        <a href="#education" class="hover:text-blue-400 transition">Education</a>
        <a href="#contact" class="hover:text-blue-400 transition">Contact</a>
      </nav>
    </div>
  </header>

  <!-- ===== HERO SECTION ===== -->
  <section class="hero min-h-screen flex items-center justify-center pt-20" id="hero">
    <div class="container mx-auto px-4 flex flex-col items-center text-center">
      <div class="mb-8">
        <img src="images/shweta-gupta.jpg" alt="Shweta Gupta" class="w-40 h-40 rounded-full border-4 border-blue-500 shadow-2xl mx-auto" />
      </div>
      <div class="mb-6 inline-block px-6 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">Pharmaceutical Quality Expert</div>
      <h1 class="text-5xl md:text-7xl font-bold mb-4">Shweta Gupta</h1>
      <p class="text-3xl md:text-4xl text-slate-400 mb-8">Manager – Quality Control</p>
      <div class="flex flex-col md:flex-row gap-6 justify-center text-lg">
        <span class="flex items-center justify-center gap-2">📍 Indore, India</span>
        <span class="flex items-center justify-center gap-2">⏳ 23+ Years Experience</span>
        <span class="flex items-center justify-center gap-2">🏢 Cipla Limited</span>
      </div>
    </div>
  </section>

  <!-- ===== ABOUT SECTION ===== -->
  <section class="about py-20 bg-gradient-to-b from-slate-900 to-slate-800" id="about">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">About Me</h2>
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <p class="text-lg text-slate-400 leading-relaxed mb-6">
            With 23+ years of dedicated experience in pharmaceutical quality control and assurance, I have developed extensive expertise in regulatory compliance, quality systems implementation, and process optimization.
          </p>
          <p class="text-lg text-slate-400 leading-relaxed">
            Currently serving as Manager Quality Control at Cipla Limited, I am committed to maintaining the highest standards of product quality and regulatory compliance.
          </p>
        </div>
        <div class="bg-slate-800 p-8 rounded-lg border border-slate-700">
          <h3 class="text-2xl font-bold mb-6">Key Highlights</h3>
          <ul class="space-y-4 text-slate-400">
            <li class="flex items-start gap-3">
              <span class="text-blue-400 font-bold">✓</span>
              <span>Expert in USFDA, MHRA, WHO regulatory frameworks</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-blue-400 font-bold">✓</span>
              <span>Proficient in HPLC, LIMS, and analytical methodologies</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-blue-400 font-bold">✓</span>
              <span>Strategic CAPA implementation</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-blue-400 font-bold">✓</span>
              <span>Team leadership and cross-functional collaboration</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== SKILLS SECTION ===== -->
  <section class="skills py-20" id="skills">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-slate-800 p-8 rounded-lg border border-slate-700">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">Regulatory Compliance</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• USFDA Regulations</li>
            <li>• MHRA Guidelines</li>
            <li>• WHO Standards</li>
            <li>• ICH Guidelines</li>
          </ul>
        </div>
        <div class="bg-slate-800 p-8 rounded-lg border border-slate-700">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">Technical Skills</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• HPLC Analysis</li>
            <li>• LIMS Management</li>
            <li>• QC Testing Methodologies</li>
            <li>• Analytical Chemistry</li>
          </ul>
        </div>
        <div class="bg-slate-800 p-8 rounded-lg border border-slate-700">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">Management</h3>
          <ul class="space-y-2 text-slate-400">
            <li>• CAPA Implementation</li>
            <li>• Team Leadership</li>
            <li>• Quality Systems</li>
            <li>• Documentation Control</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== CONTACT SECTION ===== -->
  <section class="contact py-20 bg-gradient-to-b from-slate-900 to-slate-800" id="contact">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
      <div class="max-w-2xl mx-auto bg-slate-800 p-8 rounded-lg border border-slate-700">
        <p class="text-center text-slate-400 mb-6">Feel free to reach out for collaborations or inquiries</p>
        <div class="space-y-4 text-slate-400">
          <p>📧 <strong>Email:</strong> shweta.gupta@example.com</p>
          <p>📱 <strong>Phone:</strong> +91 XXXXXXXXXX</p>
          <p>📍 <strong>Location:</strong> Indore, India</p>
          <p>💼 <strong>LinkedIn:</strong> linkedin.com/in/shwetagupta</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== FOOTER ===== -->
  <footer class="bg-slate-900 border-t border-slate-800 py-8">
    <div class="container mx-auto px-4 text-center text-slate-400">
      <p>&copy; 2024 Shweta Gupta. All rights reserved. | Powered by Hono + Cloudflare</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  let filePath = path.join(__dirname, url === '/' ? 'index.html' : url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Serve main HTML for all routes (SPA style)
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(htmlTemplate);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.webp': 'image/webp'
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache' });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('\n========================================');
  console.log('  ✨ Hono Portfolio – Server Running!');
  console.log('========================================');
  console.log(`  🌐 Local   :  http://localhost:${PORT}`);
  console.log(`  🚀 Ready for deployment to Cloudflare Pages`);
  console.log('----------------------------------------');
  console.log('  Press Ctrl+C to stop the server.');
  console.log('========================================\n');
});
