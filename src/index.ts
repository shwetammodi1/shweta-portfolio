import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';
import { css } from 'hono/css';

const app = new Hono();

// Serve static files
app.use('/images/*', serveStatic({ root: './' }));
app.use('/css/*', serveStatic({ root: './' }));
app.use('/js/*', serveStatic({ root: './' }));

// Main portfolio route
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Shweta Gupta – Manager Quality Control, 23+ years in pharmaceutical QC/QA. Expert in USFDA, MHRA, WHO regulatory compliance, HPLC, LIMS, CAPA." />
      <title>Shweta Gupta | Manager – Quality Control</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
      <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                primary: '#0f172a',
                secondary: '#64748b',
                accent: '#3b82f6'
              }
            }
          }
        }
      </script>
      <link rel="stylesheet" href="css/styles.css" />
    </head>
    <body class="bg-primary text-white font-poppins">

      <!-- ===== NAVBAR ===== -->
      <header class="navbar fixed w-full top-0 z-50 bg-primary/95 backdrop-blur-md" id="navbar">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" class="flex items-center gap-2 nav-logo">
            <span class="text-2xl font-bold text-accent">SG</span>
            <span class="text-lg font-semibold">Shweta Gupta</span>
          </a>
          <nav class="hidden md:flex gap-8 nav-links" id="navLinks">
            <a href="#about" class="hover:text-accent transition">About</a>
            <a href="#skills" class="hover:text-accent transition">Skills</a>
            <a href="#experience" class="hover:text-accent transition">Experience</a>
            <a href="#achievements" class="hover:text-accent transition">Achievements</a>
            <a href="#education" class="hover:text-accent transition">Education</a>
            <a href="#contact" class="hover:text-accent transition">Contact</a>
          </nav>
          <button class="hamburger md:hidden" id="hamburger" aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <!-- ===== HERO SECTION ===== -->
      <section class="hero min-h-screen flex items-center justify-center pt-20 relative overflow-hidden" id="hero">
        <div class="hero-overlay absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900/20 opacity-50"></div>
        <div class="hero-particles absolute inset-0" id="particles"></div>
        <div class="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div class="hero-photo-wrap mb-8">
            <img src="images/shweta-gupta.jpg" alt="Shweta Gupta" class="hero-profile-photo w-40 h-40 rounded-full border-4 border-accent shadow-2xl" />
          </div>
          <div class="hero-badge mb-6 inline-block px-6 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">Pharmaceutical Quality Expert</div>
          <h1 class="hero-name text-5xl md:text-7xl font-bold mb-4">Shweta Gupta</h1>
          <p class="hero-title text-3xl md:text-4xl text-secondary mb-8">Manager – Quality Control</p>
          <div class="hero-meta flex flex-col md:flex-row gap-6 justify-center text-lg">
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Indore, India
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8l-4 4h16l-4-4z"/></svg>
              23+ Years Experience
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Cipla Limited
            </span>
          </div>
        </div>
      </section>

      <!-- ===== ABOUT SECTION ===== -->
      <section class="about py-20 bg-gradient-to-b from-primary to-gray-900" id="about">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <p class="text-lg text-secondary leading-relaxed mb-6">
                With 23+ years of dedicated experience in pharmaceutical quality control and assurance, I have developed extensive expertise in regulatory compliance, quality systems implementation, and process optimization.
              </p>
              <p class="text-lg text-secondary leading-relaxed">
                Currently serving as Manager Quality Control at Cipla Limited, I am committed to maintaining the highest standards of product quality and regulatory compliance.
              </p>
            </div>
            <div class="bg-gradient-to-br from-blue-900 to-primary p-8 rounded-lg">
              <h3 class="text-2xl font-bold mb-6">Key Highlights</h3>
              <ul class="space-y-4 text-secondary">
                <li class="flex items-start gap-3">
                  <span class="text-accent font-bold">✓</span>
                  <span>Expert in USFDA, MHRA, WHO regulatory frameworks</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-accent font-bold">✓</span>
                  <span>Proficient in HPLC, LIMS, and analytical methodologies</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-accent font-bold">✓</span>
                  <span>Strategic CAPA (Corrective & Preventive Actions) implementation</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-accent font-bold">✓</span>
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
            <div class="bg-gradient-to-br from-blue-900 to-primary p-8 rounded-lg">
              <h3 class="text-2xl font-bold mb-4 text-accent">Regulatory Compliance</h3>
              <ul class="space-y-2 text-secondary">
                <li>• USFDA Regulations</li>
                <li>• MHRA Guidelines</li>
                <li>• WHO Standards</li>
                <li>• ICH Guidelines</li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-blue-900 to-primary p-8 rounded-lg">
              <h3 class="text-2xl font-bold mb-4 text-accent">Technical Skills</h3>
              <ul class="space-y-2 text-secondary">
                <li>• HPLC Analysis</li>
                <li>• LIMS Management</li>
                <li>• QC Testing Methodologies</li>
                <li>• Analytical Chemistry</li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-blue-900 to-primary p-8 rounded-lg">
              <h3 class="text-2xl font-bold mb-4 text-accent">Management</h3>
              <ul class="space-y-2 text-secondary">
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
      <section class="contact py-20 bg-gradient-to-b from-primary to-gray-900" id="contact">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div class="max-w-2xl mx-auto bg-gradient-to-br from-blue-900 to-primary p-8 rounded-lg">
            <form class="space-y-6" id="contactForm">
              <div>
                <label for="name" class="block text-secondary mb-2">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required class="w-full px-4 py-2 bg-primary border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label for="email" class="block text-secondary mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required class="w-full px-4 py-2 bg-primary border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label for="subject" class="block text-secondary mb-2">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="How can I help you?" required class="w-full px-4 py-2 bg-primary border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label for="message" class="block text-secondary mb-2">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your message..." required class="w-full px-4 py-2 bg-primary border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent"></textarea>
              </div>
              <button type="submit" class="w-full bg-accent hover:bg-blue-600 text-white font-bold py-3 rounded transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <!-- ===== FOOTER ===== -->
      <footer class="bg-primary border-t border-gray-800 py-8">
        <div class="container mx-auto px-4 text-center text-secondary">
          <p>&copy; 2024 Shweta Gupta. All rights reserved. | Powered by Hono + Cloudflare</p>
        </div>
      </footer>

      <script src="js/main.js"></script>
    </body>
    </html>
  `);
});

export default app;
