import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const viewports = [
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

test.beforeEach(async ({ page }) => {
  await page.goto('./');
});

test('renders without horizontal overflow across required breakpoints', async ({ page }) => {
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await expect(
      page.getByRole('heading', { name: /software that moves between layers/i }),
    ).toBeVisible();
    const metrics = await page.evaluate(() => ({
      width: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(metrics.scrollWidth, `${viewport.width}px viewport`).toBeLessThanOrEqual(metrics.width);
  }
});

test('switches language and keeps it after navigation', async ({ page }) => {
  await page.getByRole('button', { name: 'PT' }).click();
  await expect(
    page.getByRole('heading', { name: /software que se move entre camadas/i }),
  ).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await page.getByRole('link', { name: /magventure:/i }).click();
  await expect(page.getByRole('link', { name: /voltar aos projetos/i })).toBeVisible();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
});

test('opens a case route, survives direct refresh and exposes safe evidence', async ({ page }) => {
  await page.goto('work/crypto-ai/');
  await expect(page.getByRole('heading', { name: 'Crypto AI' })).toBeVisible();
  await expect(page).toHaveTitle(/Crypto AI/);
  await expect(page.getByText(/never give the model execution authority/i)).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Crypto AI' })).toBeVisible();
});

test('mobile menu, external-link safety and touch targets work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: /open menu/i }).click();
  await expect(page.getByRole('navigation', { name: /mobile navigation/i })).toBeVisible();
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

test('reduced motion exposes content without long transitions', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await expect(
    page.getByRole('heading', { name: /software that moves between layers/i }),
  ).toBeVisible();
  const motion = await page.locator('.hero-bottom').evaluate((element) => {
    const style = getComputedStyle(element);
    return { animation: style.animationDuration, transition: style.transitionDuration };
  });
  expect(['0s', '0.00001s', '1e-05s']).toContain(motion.animation);
  expect(['0s', '0.00001s', '1e-05s']).toContain(motion.transition);
});

test('home has no automatically detectable WCAG A/AA violations', async ({ page }) => {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});
