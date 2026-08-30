import { chromium } from '@playwright/test';
import { mkdir, rename } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const artifactRoot = resolve(projectRoot, 'artifacts', 'v3.2', 'visual-qa');
const screenshotDirectory = resolve(artifactRoot, 'screenshots');
const motionDirectory = resolve(artifactRoot, 'motion-recordings');
const baseUrl = process.env.CAPTURE_BASE_URL ?? 'http://127.0.0.1:4173/Portifolio-v2/';
const requiredViewports = [
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

await Promise.all([
  mkdir(screenshotDirectory, { recursive: true }),
  mkdir(motionDirectory, { recursive: true }),
]);

const browser = await chromium.launch({ headless: true });
const pageErrors = [];

async function settle(page, delay = 1000) {
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(delay);
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

for (const viewport of requiredViewports) {
  const context = await browser.newContext({ viewport, colorScheme: 'dark' });
  const page = await context.newPage();
  page.on('pageerror', (error) => pageErrors.push(`${viewport.width}: ${error.message}`));
  await page.goto(baseUrl);
  await settle(page, 850);
  await page.screenshot({
    path: resolve(screenshotDirectory, `hero-top-${viewport.width}x${viewport.height}.png`),
  });
  await context.close();
}

const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const desktopPage = await desktopContext.newPage();
desktopPage.on('pageerror', (error) => pageErrors.push(`desktop: ${error.message}`));
await desktopPage.goto(baseUrl);
await settle(desktopPage);
const brand = desktopPage.getByRole('link', { name: /jonathan febraio — home/i });
await brand.screenshot({ path: resolve(screenshotDirectory, 'logo-normal-1440.png') });
await brand.hover();
await desktopPage.waitForTimeout(220);
await brand.screenshot({ path: resolve(screenshotDirectory, 'logo-hover-1440.png') });
const heroCanvas = desktopPage.locator('canvas[data-signal-field="hero"]');
const heroBounds = await heroCanvas.boundingBox();
if (heroBounds) {
  await desktopPage.mouse.move(
    heroBounds.x + heroBounds.width * 0.45,
    heroBounds.y + heroBounds.height * 0.42,
  );
  await desktopPage.mouse.move(
    heroBounds.x + heroBounds.width * 0.78,
    heroBounds.y + heroBounds.height * 0.6,
    { steps: 6 },
  );
  await desktopPage.waitForTimeout(100);
}
await desktopPage.screenshot({ path: resolve(screenshotDirectory, 'hero-pointer-1440x900.png') });
await desktopPage.getByRole('link', { name: 'System', exact: true }).click();
await desktopPage.waitForTimeout(650);
await desktopPage.screenshot({ path: resolve(screenshotDirectory, 'header-scroll-1440x900.png') });
await desktopPage.mouse.wheel(0, 520);
await desktopPage.waitForTimeout(450);
await desktopPage.screenshot({ path: resolve(screenshotDirectory, 'system-web-1440x900.png') });
await desktopPage.getByRole('tab', { name: /04 AI/i }).click();
await desktopPage.waitForTimeout(850);
await desktopPage.screenshot({ path: resolve(screenshotDirectory, 'system-ai-1440x900.png') });
await desktopPage.goto(new URL('work/crypto-ai/', baseUrl).href);
await settle(desktopPage, 650);
await desktopPage.screenshot({ path: resolve(screenshotDirectory, 'case-header-1440x900.png') });
await desktopContext.close();

const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mobilePage = await mobileContext.newPage();
mobilePage.on('pageerror', (error) => pageErrors.push(`mobile: ${error.message}`));
await mobilePage.goto(baseUrl);
await settle(mobilePage, 650);
await mobilePage.getByRole('button', { name: /open menu/i }).click();
await mobilePage.waitForTimeout(300);
await mobilePage.screenshot({ path: resolve(screenshotDirectory, 'mobile-menu-390x844.png') });
await mobileContext.close();

const reducedContext = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: 'reduce',
});
const reducedPage = await reducedContext.newPage();
reducedPage.on('pageerror', (error) => pageErrors.push(`reduced: ${error.message}`));
await reducedPage.goto(baseUrl);
await settle(reducedPage, 250);
await reducedPage.screenshot({ path: resolve(screenshotDirectory, 'reduced-motion-1440x900.png') });
await reducedContext.close();

await record('01-logo-intro', async (page) => {
  await page.goto(baseUrl);
  await settle(page, 1200);
});

await record('02-logo-hover', async (page) => {
  await page.goto(baseUrl);
  await settle(page, 900);
  const logo = page.getByRole('link', { name: /jonathan febraio — home/i });
  await logo.hover();
  await page.waitForTimeout(1000);
});

await record('03-header-scroll', async (page) => {
  await page.goto(baseUrl);
  await settle(page, 700);
  await page.evaluate(() => window.scrollTo({ top: 1100, behavior: 'smooth' }));
  await page.waitForTimeout(1800);
});

await record('04-signal-field-pointer', async (page) => {
  await page.goto(baseUrl);
  await settle(page, 750);
  const canvas = page.locator('canvas[data-signal-field="hero"]');
  const bounds = await canvas.boundingBox();
  if (!bounds) return;
  for (let index = 0; index < 70; index += 1) {
    const progress = index / 69;
    await page.mouse.move(
      bounds.x + bounds.width * (0.12 + progress * 0.78),
      bounds.y + bounds.height * (0.48 + Math.sin(progress * Math.PI * 4) * 0.2),
    );
    await page.waitForTimeout(18);
  }
  await page.waitForTimeout(900);
});

await record('05-system-lab-modes', async (page) => {
  await page.goto(`${baseUrl}#system`);
  await settle(page, 700);
  await page.mouse.wheel(0, 520);
  await page.waitForTimeout(450);
  await page.getByRole('tab', { name: /04 AI/i }).click();
  await page.waitForTimeout(1100);
  await page.getByRole('tab', { name: /05 PLATFORM/i }).click();
  await page.waitForTimeout(1100);
});

await browser.close();

if (pageErrors.length) {
  console.error(pageErrors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Captured V3.2 screenshots in ${screenshotDirectory}`);
  console.log(`Captured V3.2 motion recordings in ${motionDirectory}`);
}
