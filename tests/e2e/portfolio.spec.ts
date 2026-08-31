import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

let pageErrors: string[];

const viewports = [
  { width: 320, height: 568 },
  { width: 360, height: 640 },
  { width: 375, height: 667 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 540, height: 720 },
  { width: 768, height: 1024 },
  { width: 820, height: 1180 },
  { width: 1024, height: 768 },
  { width: 1280, height: 720 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 2560, height: 1440 },
  { width: 3440, height: 1440 },
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
  await page.getByRole('button', { name: 'PT', exact: true }).click();
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
  await expect(page.getByRole('heading', { name: 'Crypto AI', level: 1 })).toBeVisible();
  await expect(page).toHaveTitle(/Crypto AI/);
  await expect(page.getByText(/never give the model execution authority/i)).toBeVisible();
  await expect(
    page.getByRole('img', { name: /crypto ai engineering architecture/i }),
  ).toBeVisible();
  await expect(page.locator('.case-gallery-slide-v33')).toHaveCount(2);
  await page.getByRole('button', { name: 'Next project image' }).click();
  await expect(
    page.getByRole('group', { name: /2 \/ 2 — architecture and guardrails/i }),
  ).toHaveClass(/is-active/);
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Crypto AI', level: 1 })).toBeVisible();
});

test('every exposed portfolio case resolves as a direct route', async ({ page }) => {
  const caseUrls = await page
    .locator('a[href*="/work/"]')
    .evaluateAll((links) => [...new Set(links.map((link) => (link as HTMLAnchorElement).href))]);
  expect(caseUrls.length).toBeGreaterThanOrEqual(9);

  for (const caseUrl of caseUrls) {
    await page.goto(caseUrl);
    await expect(page.locator('.case-title-v31')).toBeVisible();
    await expect(page.locator('.case-page-v31')).toHaveCount(1);
  }
});

test('project reel keeps one project in focus and supports controls plus keyboard', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  const reel = page.getByRole('region', { name: 'Independent projects' });
  await reel.scrollIntoViewIfNeeded();

  await expect(page.getByRole('heading', { name: 'Crypto AI', level: 3 })).toBeVisible();
  await expect(page.locator('.project-slide-v33.is-active')).toHaveAttribute(
    'aria-label',
    /Crypto AI/,
  );
  await expect(page.locator('.project-slide-v33:not(.is-active)').first()).toHaveCSS(
    'filter',
    /blur\(5px\)/,
  );

  await page.getByRole('button', { name: 'Next project' }).click();
  await expect(page.getByRole('heading', { name: 'TimeBubble', level: 3 })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Open product case: TimeBubble' })).toHaveAttribute(
    'href',
    /\/work\/timebubble/,
  );
  await expect(
    page.locator('.project-slide-v33.is-active .project-slide-v33__mobile-preview'),
  ).toBeVisible();

  await reel.focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('heading', { name: 'FebraioTech', level: 3 })).toBeVisible();
});

test('hero scroll is natural and architecture nodes expose useful explanations', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  const metrics = await page.locator('.hero-v31').evaluate((hero) => {
    const stage = hero.querySelector<HTMLElement>('.hero-stage-v31');
    return {
      heroHeight: hero.getBoundingClientRect().height,
      viewportHeight: window.innerHeight,
      stagePosition: stage ? getComputedStyle(stage).position : null,
    };
  });
  expect(metrics.heroHeight).toBeLessThanOrEqual(metrics.viewportHeight + 2);
  expect(metrics.stagePosition).toBe('relative');

  await expect(page.locator('.hero-architecture-v31 .signal-inspector-v33__note')).toHaveCount(0);
  await page.getByRole('button', { name: 'Explain MOBILE' }).hover();
  await expect(page.getByText(/React Native journeys share service contracts/i)).toBeVisible();
  const relation = await page.evaluate(() => {
    const node = document.querySelector<HTMLElement>('button[aria-label="Explain MOBILE"]');
    const note = document.querySelector<HTMLElement>(
      '.hero-architecture-v31 .signal-inspector-v33__note',
    );
    if (!node || !note) return null;
    const nodeRect = node.getBoundingClientRect();
    const noteRect = note.getBoundingClientRect();
    return {
      distance: Math.hypot(
        noteRect.left + noteRect.width / 2 - (nodeRect.left + nodeRect.width / 2),
        noteRect.top + noteRect.height / 2 - (nodeRect.top + nodeRect.height / 2),
      ),
      architectureWidth:
        document.querySelector<HTMLElement>('.hero-architecture-v31')?.getBoundingClientRect()
          .width ?? 0,
    };
  });
  expect(relation).not.toBeNull();
  expect(relation!.distance).toBeLessThan(relation!.architectureWidth * 0.62);
  await page.mouse.move(10, 10);
  await expect(page.locator('.hero-architecture-v31 .signal-inspector-v33__note')).toHaveCount(0);
});

test('mobile architecture remains contained and opens local notes on tap', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  const metrics = await page.locator('.hero-architecture-v31').evaluate((architecture) => {
    const rect = architecture.getBoundingClientRect();
    return {
      left: rect.left,
      right: rect.right,
      viewportWidth: window.innerWidth,
      stageHeight: architecture.closest('.hero-stage-v31')?.getBoundingClientRect().height ?? 0,
    };
  });
  expect(metrics.left).toBeGreaterThanOrEqual(0);
  expect(metrics.right).toBeLessThanOrEqual(metrics.viewportWidth);
  expect(metrics.stageHeight).toBeGreaterThanOrEqual(568);
  await expect(page.locator('.hero-architecture-v31 .signal-inspector-v33__note')).toHaveCount(0);
  await page.locator('.hero-architecture-v31').getByRole('button', { name: 'Explain API' }).click();
  await expect(page.getByText(/contract boundary validates input/i)).toBeVisible();
  const noteBounds = await page
    .locator('.hero-architecture-v31 .signal-inspector-v33__note')
    .boundingBox();
  expect(noteBounds).not.toBeNull();
  expect(noteBounds!.x).toBeGreaterThanOrEqual(0);
  expect(noteBounds!.x + noteBounds!.width).toBeLessThanOrEqual(320);
});

test('new highlighted projects expose verified product and source evidence', async ({ page }) => {
  await page.goto('work/timebubble/');
  await expect(page.getByRole('heading', { name: 'TimeBubble', level: 1 })).toBeVisible();
  await expect(page.locator('.case-gallery-slide-v33')).toHaveCount(3);
  const publishedImage = page.locator('.case-gallery-slide-v33 img').first();
  await expect(publishedImage).toBeVisible();
  expect(
    await publishedImage.evaluate((image) => (image as HTMLImageElement).naturalWidth),
  ).toBeGreaterThanOrEqual(700);
  await expect(page.getByRole('link', { name: /open live product/i })).toHaveAttribute(
    'href',
    /play\.google\.com\/store\/apps\/details\?id=br\.com\.jonathanfebraio\.timebubble/,
  );
  await expect(page.getByRole('link', { name: /inspect mobile source/i })).toHaveAttribute(
    'href',
    'https://github.com/JRaamos/time-bubble',
  );

  await page.setViewportSize({ width: 320, height: 568 });
  const portraitMedia = page.locator('.case-gallery-slide-v33.is-active .case-gallery-slide-v33__media');
  const portraitBounds = await portraitMedia.boundingBox();
  expect(portraitBounds).not.toBeNull();
  expect(portraitBounds!.height).toBeGreaterThan(portraitBounds!.width);

  await page.goto('work/sistema-de-agendamento/');
  await expect(
    page.getByRole('heading', { name: 'Sistema de Agendamento', level: 1 }),
  ).toBeVisible();
  await expect(page.locator('.case-gallery-slide-v33')).toHaveCount(3);
  await expect(page.getByRole('link', { name: /inspect source/i })).toHaveAttribute(
    'href',
    'https://github.com/JRaamos/Sistema-de-Agendamento',
  );
  const titleFit = await page.locator('.case-title-v31 span').evaluateAll((words) =>
    words.every((word) => {
      const element = word as HTMLElement;
      const bounds = element.getBoundingClientRect();
      return element.scrollWidth <= element.clientWidth + 1 && bounds.right <= window.innerWidth;
    }),
  );
  expect(titleFit).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
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
