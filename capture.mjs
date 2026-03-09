import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setViewport({ width: 1920, height: 1080 });

        console.log("Navigating to http://localhost:3000 ...");
        // networkidle2 is useful to wait until page is fully loaded with images
        // wait for 2 seconds extra just in case there are custom animations
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 60000 });
        await new Promise(r => setTimeout(r, 2000));

        console.log("Capturing screenshot...");
        await page.screenshot({ path: 'website-screenshot.png', fullPage: true });

        console.log("Generating PDF...");
        await page.pdf({ path: 'website.pdf', format: 'A4', printBackground: true });

        await browser.close();
        console.log("Done!");
    } catch (err) {
        console.error("Error:", err);
        process.exit(1);
    }
})();
