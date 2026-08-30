import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

let pageErrors: string[];

const viewports = [
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

test.beforeEach(async ({ page }) => {
  pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.stack ?? error.message));
  await page.goto('./');
});

test.afterEach(() => {
  expect(pageErrors).toEqual([]);
});

test('renders without horizontal overflow across required breakpoints', async ({ page }) => {
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await expect(page.getByRole('heading', { name: 'Jonathan Febraio' })).toBeVisible();
    const metrics = await page.evaluate(() => ({
      width: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(metrics.scrollWidth, `${viewport.width}px viewport`).toBeLessThanOrEqual(metrics.width);
  }
});

test('switches language and keeps it after navigation', async ({ page }) => {
  await page.getByRole('button', { name: 'PT' }).click();
  await expect(page.getByText(/construo produtos entre web, backend, mobile e ia/i)).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await page.getByRole('link', { name: 'Projetos', exact: true }).click();
  const firstCaseLink = page.getByRole('link', { name: /abrir case anonimizado/i }).first();
  await expect(firstCaseLink).toHaveAttribute('href', /\/work\//);
  await firstCaseLink.focus();
  await expect(firstCaseLink).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('link', { name: 'Voltar aos projetos', exact: true })).toBeVisible();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
});

test('opens a case route, survives direct refresh and exposes safe evidence', async ({ page }) => {
  await page.goto('work/crypto-ai/');
  await expect(page.getByRole('heading', { name: 'Crypto AI' })).toBeVisible();
  await expect(page).toHaveTitle(/Crypto AI/);
  await expect(page.getByText(/never give the model execution authority/i)).toBeVisible();
  await expect(
    page.getByRole('img', { name: /crypto ai engineering architecture/i }),
  ).toBeVisible();
  await expect(page.locator('.case-product-view-v31')).toHaveCount(2);
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Crypto AI' })).toBeVisible();
});

test('mobile menu, external-link safety and touch targets work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: /open menu/i }).click();
  await expect(page.getByRole('navigation', { name: /mobile navigation/i })).toBeVisible();
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('navigation', { name: /mobile navigation/i })).toBeHidden();
  await expect(page.getByRole('button', { name: /open menu/i })).toBeFocused();
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  await page.getByRole('button', { name: /open menu/i }).click();
  await page
    .getByRole('navigation', { name: /mobile navigation/i })
    .getByRole('link')
    .first()
    .click();
  await expect(page.getByRole('button', { name: /open menu/i })).toHaveAttribute(
    'aria-expanded',
    'false',
  );

  const externalLinks = page.locator('a[target="_blank"]');
  await expect(externalLinks).not.toHaveCount(0);
  for (const link of await externalLinks.all()) {
    await expect(link).toHaveAttribute('rel', /noreferrer/);
  }

  const undersized = await page.locator('a,button').evaluateAll((elements) =>
    elements
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          label: element.getAttribute('aria-label') || element.textContent,
          width: rect.width,
          height: rect.height,
        };
      })
      .filter((item) => item.width > 0 && item.height > 0 && (item.width < 44 || item.height < 44)),
  );
  expect(undersized).toEqual([]);
});

test('public repository references and WhatsApp contact are wired safely', async ({ page }) => {
  await expect(page.getByRole('link', { name: /converse com amor/i })).toHaveAttribute(
    'href',
    'https://github.com/JRaamos/Converse-com-amor',
  );
  const whatsappLinks = page.locator('a[href^="https://wa.me/5511921404143"]');
  await expect(whatsappLinks).toHaveCount(2);
  for (const link of await whatsappLinks.all()) {
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noreferrer/);
  }
});

test('fine-pointer motion responds to the cursor without becoming content state', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  const signal = page.locator('canvas[data-signal-field="hero"]');
  const bounds = await signal.boundingBox();
  expect(bounds).not.toBeNull();
  await page.mouse.move(bounds!.x + bounds!.width * 0.65, bounds!.y + bounds!.height * 0.42);
  const firstPointer = await signal.getAttribute('data-signal-pointer');
  await page.mouse.move(bounds!.x + bounds!.width * 0.82, bounds!.y + bounds!.height * 0.58, {
    steps: 3,
  });
  await page.waitForTimeout(100);
  const secondPointer = await signal.getAttribute('data-signal-pointer');
  expect(secondPointer).not.toBe(firstPointer);
  await expect(signal).toHaveAttribute('data-signal-running', 'true');
});

test('section navigation and System Lab expose the active system state', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.getByRole('link', { name: 'System', exact: true }).click();
  await expect(page.getByRole('link', { name: 'System', exact: true })).toHaveAttribute(
    'aria-current',
    'location',
  );
  await page.getByRole('tab', { name: /04 AI/i }).click();
  await expect(
    page.getByRole('heading', { name: /intelligence stays inside a bounded role/i }),
  ).toBeVisible();
  await expect(page.locator('canvas[data-signal-field="lab"]')).toHaveAttribute(
    'data-signal-scene',
    'lab-ai',
  );
  await expect(page.getByText('Qdrant')).toBeVisible();
});

test('reduced motion exposes content without long transitions', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Jonathan Febraio' })).toBeVisible();
  const motion = await page.locator('.hero-support-v31').evaluate((element) => {
    const style = getComputedStyle(element);
    return { animation: style.animationDuration, transition: style.transitionDuration };
  });
  expect(['0s', '0.00001s', '1e-05s']).toContain(motion.animation);
  expect(['0s', '0.00001s', '1e-05s']).toContain(motion.transition);
  await expect(page.locator('canvas[data-signal-field="hero"]')).toHaveAttribute(
    'data-signal-running',
    'false',
  );
  await expect(page.getByText(/product, web and mobile requests pass through api/i)).toBeAttached();
});

test('Signal Field pauses outside the viewport', async ({ page }) => {
  const heroSignal = page.locator('canvas[data-signal-field="hero"]');
  await expect(heroSignal).toHaveAttribute('data-signal-running', 'true');
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await expect(heroSignal).toHaveAttribute('data-signal-visible', 'false');
  await expect(heroSignal).toHaveAttribute('data-signal-running', 'false');
});

test('coarse pointers run one lightweight demo and then settle', async ({ browser, baseURL }) => {
  const context = await browser.newContext({
    hasTouch: true,
    isMobile: true,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto(baseURL ?? './');
  const heroSignal = page.locator('canvas[data-signal-field="hero"]');
  await expect(heroSignal).toBeAttached();
  await page.waitForTimeout(3_600);
  await expect(heroSignal).toHaveAttribute('data-signal-running', 'false');
  await expect(heroSignal).not.toHaveAttribute('data-signal-pointer', /.+/);
  await context.close();
});

test('home has no automatically detectable WCAG A/AA violations', async ({ page }) => {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});
