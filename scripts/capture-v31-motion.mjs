import { chromium } from '@playwright/test';
import { mkdir, rename } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const artifactRoot = resolve(projectRoot, 'artifacts', 'v3.1');
const motionDirectory = resolve(artifactRoot, 'motion-recordings');
const frameDirectory = resolve(artifactRoot, 'qa-frames');
const baseUrl = process.env.CAPTURE_BASE_URL ?? 'http://127.0.0.1:4173/Portifolio-v2/';

await Promise.all([
  mkdir(motionDirectory, { recursive: true }),
  mkdir(frameDirectory, { recursive: true }),
]);

const browser = await chromium.launch({ headless: true });
const pageErrors = [];

async function settle(page) {
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(900);
}

async function record(name, run) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: motionDirectory, size: { width: 1440, height: 900 } },
    colorScheme: 'dark',
  });
  const page = await context.newPage();
  page.on('pageerror', (error) => pageErrors.push(`${name}: ${error.message}`));
  await run(page);
  const video = page.video();
  await page.close();
  if (video) await rename(await video.path(), resolve(motionDirectory, `${name}.webm`));
  await context.close();
}

await record('01-hero-request-path', async (page) => {
  await page.goto(baseUrl);
  await settle(page);
  await page.screenshot({ path: resolve(frameDirectory, 'hero-start-1440.png') });
  await page.evaluate(() => window.scrollTo({ top: 900, behavior: 'smooth' }));
  await page.waitForTimeout(3000);
  await page.screenshot({ path: resolve(frameDirectory, 'hero-delivery-1440.png') });
});

await record('02-professional-architecture-morph', async (page) => {
  await page.goto(baseUrl);
  await settle(page);
  const workTop = await page.locator('#work').evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  });
  await page.evaluate((top) => window.scrollTo(0, top), workTop);
  await page.waitForTimeout(850);
  await page.screenshot({ path: resolve(frameDirectory, 'professional-learning-1440.png') });
  await page.evaluate((top) => window.scrollTo({ top: top + 1150, behavior: 'smooth' }), workTop);
  await page.waitForTimeout(3000);
  await page.screenshot({ path: resolve(frameDirectory, 'professional-automotive-1440.png') });
  await page.evaluate((top) => window.scrollTo({ top: top + 2500, behavior: 'smooth' }), workTop);
  await page.waitForTimeout(3000);
  await page.screenshot({ path: resolve(frameDirectory, 'professional-operations-1440.png') });
});

await record('03-engineering-modes', async (page) => {
  await page.goto(`${baseUrl}#system`);
  await settle(page);
  await page.screenshot({ path: resolve(frameDirectory, 'mode-web-1440.png') });
  await page.getByRole('tab', { name: /AI/ }).click();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: resolve(frameDirectory, 'mode-ai-1440.png') });
  await page.getByRole('tab', { name: /PLATFORM/ }).click();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: resolve(frameDirectory, 'mode-platform-1440.png') });
});

await record('04-case-architecture-story', async (page) => {
  await page.goto(new URL('work/crypto-ai/', baseUrl).href);
  await settle(page);
  await page.screenshot({ path: resolve(frameDirectory, 'case-hero-1440.png') });
  const storyTop = await page.locator('.case-system-story-v31').evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  });
  await page.evaluate((top) => window.scrollTo(0, top), storyTop);
  await page.waitForTimeout(900);
  for (let index = 0; index < 5; index += 1) {
    await page.mouse.wheel(0, 410);
    await page.waitForTimeout(620);
  }
  await page.screenshot({ path: resolve(frameDirectory, 'case-system-1440.png') });
});

const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mobilePage = await mobileContext.newPage();
mobilePage.on('pageerror', (error) => pageErrors.push(`mobile: ${error.message}`));
await mobilePage.goto(baseUrl);
await settle(mobilePage);
await mobilePage.screenshot({ path: resolve(frameDirectory, 'hero-mobile-390.png') });
await mobilePage.getByRole('button', { name: /open menu/i }).click();
await mobilePage.waitForTimeout(450);
await mobilePage.screenshot({ path: resolve(frameDirectory, 'menu-mobile-390.png') });
await mobilePage
  .getByRole('navigation', { name: /mobile navigation/i })
  .getByRole('link', { name: /work/i })
  .click();
await mobilePage.waitForTimeout(900);
await mobilePage.mouse.wheel(0, 420);
await mobilePage.waitForTimeout(700);
await mobilePage.screenshot({ path: resolve(frameDirectory, 'professional-mobile-390.png') });
await mobileContext.close();

const productContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const productPage = await productContext.newPage();
productPage.on('pageerror', (error) => pageErrors.push(`product: ${error.message}`));
await productPage.goto(baseUrl);
await settle(productPage);
const productTop = await productPage
  .locator('.product-chapter-v31')
  .first()
  .evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  });
await productPage.evaluate((top) => window.scrollTo(0, top), productTop);
await productPage.waitForTimeout(900);
await productPage.screenshot({ path: resolve(frameDirectory, 'product-febraio-tech-1440.png') });
await productContext.close();

await browser.close();

if (pageErrors.length) {
  console.error(pageErrors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Captured motion recordings in ${motionDirectory}`);
  console.log(`Captured QA frames in ${frameDirectory}`);
}
