/*
 * Open a webpage (in mobile emulation) and capture screenshot
 */
const pw = require('playwright');
const nexus5X = pw.devices['Nexus 5X'];

// the main function is wrapped in async since we are `await`ing on promises
(async () => {
  // create browser
  const browser = await pw.chromium.launch(); // or 'webkit', 'firefox'
  // create browser's context with desired option
  const context = await browser.newContext({
    viewport: nexus5X.viewport, // desired viewport
    userAgent: nexus5X.userAgent // desired userAgent
  });
  // create page from browser's context
  const page = await context.newPage();
  await page.goto('https://github.com/sarbbottam/playwright-tutorial');
  await page.screenshot({ path: './01/playwright-tutorial.png' });
  // close browser
  await browser.close();
})();
