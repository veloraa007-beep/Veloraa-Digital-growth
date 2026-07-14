import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const pages = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'brand-transparency', path: '/brand-transparency' },
  { name: 'company', path: '/company' },
  { name: 'contact', path: '/contact' },
  { name: 'faq', path: '/faq' },
  { name: 'industries', path: '/industries' },
  { name: 'infrastructure', path: '/infrastructure' },
  { name: 'launch', path: '/launch' },
  { name: 'pricing', path: '/pricing' },
  { name: 'privacy-policy', path: '/privacy-policy' },
  { name: 'refund-policy', path: '/refund-policy' },
  { name: 'security', path: '/security' },
  { name: 'services', path: '/services' },
  { name: 'terms', path: '/terms' },
  { name: 'trust', path: '/trust' },
  { name: 'what-is-velora', path: '/what-is-velora' },
  { name: 'work', path: '/work' }
];

const outputDir = path.join(process.cwd(), 'screenshots');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  console.log("Launching Chrome...");
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1
  });
  
  const page = await context.newPage();

  page.on('console', msg => {
    console.log(`[PAGE LOG] [${msg.type()}] ${msg.text()}`);
  });
  page.on('pageerror', err => {
    console.error(`[PAGE ERROR] ${err.stack}`);
  });

  for (const p of pages) {
    const url = `http://localhost:3000${p.path}`;
    console.log(`\n----------------------------------------`);
    console.log(`Navigating to ${url} (${p.name})...`);
    
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 30000 });
      console.log("Page loaded. Waiting 2s...");
      await page.waitForTimeout(2000);

      // Smooth scroll to bottom to trigger lazy loading / animations
      console.log("Scrolling page to trigger lazy loading...");
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 250;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight || totalHeight > 15000) { // cap at 15000px
              clearInterval(timer);
              resolve();
            }
          }, 100);
        });
      });

      // Scroll back to top
      await page.evaluate(() => window.scrollTo(0, 0));
      console.log("Scrolled back to top. Waiting 3s for animations/images to settle...");
      await page.waitForTimeout(3000);

      const filePathFull = path.join(outputDir, `${p.name}-full.png`);
      const filePathViewport = path.join(outputDir, `${p.name}-viewport.png`);

      console.log(`Capturing full page screenshot: ${filePathFull}`);
      try {
        await page.screenshot({ path: filePathFull, fullPage: true });
      } catch (err) {
        console.error(`Failed to capture full page screenshot for ${p.name}:`, err.message);
      }

      console.log(`Capturing viewport screenshot: ${filePathViewport}`);
      try {
        await page.screenshot({ path: filePathViewport, fullPage: false });
      } catch (err) {
        console.error(`Failed to capture viewport screenshot for ${p.name}:`, err.message);
      }

    } catch (err) {
      console.error(`Error processing page ${p.name}:`, err);
    }
  }

  await browser.close();
  console.log("\nAll pages processed!");
})();
