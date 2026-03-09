import { chromium } from 'playwright';

(async () => {
    console.log("Launching browser...");
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.setViewportSize({ width: 1920, height: 1080 });

    console.log("Navigating to http://localhost:3000 ...");
    try {
        await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
    } catch (err) {
        console.error("Navigation issue:", err.message);
    }

    console.log("Waiting 3s for animations to settle...");
    await page.waitForTimeout(3000);

    console.log("Capturing full page screenshot...");
    try {
        await page.screenshot({ path: 'website-screenshot.png', fullPage: true, animations: 'disabled' });
    } catch (err) {
        console.log("Failed fullpage, trying viewport only.", err.message);
        await page.screenshot({ path: 'website-screenshot.png' });
    }

    console.log("Generating PDF...");
    try {
        await page.pdf({ path: 'website.pdf', format: 'A4', printBackground: true });
    } catch (err) {
        console.error("Failed PDF generation:", err.message);
    }

    await browser.close();
    console.log("Done!");
})();
