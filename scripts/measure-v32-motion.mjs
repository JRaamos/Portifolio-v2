import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const baseUrl = process.env.MOTION_BASE_URL ?? 'http://127.0.0.1:4173/Portifolio-v2/';
const output = resolve(
  root,
  process.env.MOTION_OUTPUT ?? 'artifacts/v3.2/final/motion-performance.json',
);
const selector = process.env.MOTION_SELECTOR ?? 'canvas[data-signal-field="hero"]';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(baseUrl, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1200);

const target = page.locator(selector).first();
const bounds = (await target.boundingBox()) ?? { x: 0, y: 0, width: 1440, height: 900 };
const session = await page.context().newCDPSession(page);
await session.send('Performance.enable');
const before = await session.send('Performance.getMetrics');

const frameMeasurement = page.evaluate(
  () =>
    new Promise((resolveMeasurement) => {
      const samples = [];
      const longTasks = [];
      const observer =
        typeof PerformanceObserver === 'undefined'
          ? null
          : new PerformanceObserver((list) => {
              list.getEntries().forEach((entry) => longTasks.push(entry.duration));
            });
      try {
        observer?.observe({ type: 'longtask' });
      } catch {
        observer?.disconnect();
      }
      const startedAt = performance.now();
      const sample = (time) => {
        samples.push(time);
        if (time - startedAt < 3000) requestAnimationFrame(sample);
        else {
          observer?.disconnect();
          const intervals = samples.slice(1).map((value, index) => value - samples[index]);
          const sortedIntervals = [...intervals].sort((a, b) => a - b);
          const medianInterval = sortedIntervals[Math.floor(sortedIntervals.length / 2)];
          const duration = samples.at(-1) - samples[0];
          const droppedFrames = intervals.reduce(
            (total, interval) => total + Math.max(0, Math.round(interval / medianInterval) - 1),
            0,
          );
          resolveMeasurement({
            durationMs: duration,
            frames: samples.length,
            fps: ((samples.length - 1) / duration) * 1000,
            medianFrameIntervalMs: medianInterval,
            droppedFrames,
            intervalsOverBudget: intervals.filter((interval) => interval > medianInterval * 1.5)
              .length,
            maximumFrameIntervalMs: Math.max(...intervals),
            longTaskCount: longTasks.length,
            longTaskDurationMs: longTasks.reduce((total, durationMs) => total + durationMs, 0),
          });
        }
      };
      requestAnimationFrame(sample);
    }),
);

for (let index = 0; index < 90; index += 1) {
  const progress = index / 89;
  const x = bounds.x + bounds.width * (0.18 + progress * 0.68);
  const y = bounds.y + bounds.height * (0.5 + Math.sin(progress * Math.PI * 4) * 0.18);
  await page.mouse.move(x, y);
  await page.waitForTimeout(16);
}

const frames = await frameMeasurement;
const after = await session.send('Performance.getMetrics');
const metricMap = (metrics) => new Map(metrics.metrics.map(({ name, value }) => [name, value]));
const beforeMetrics = metricMap(before);
const afterMetrics = metricMap(after);
const deltaMs = (name) => ((afterMetrics.get(name) ?? 0) - (beforeMetrics.get(name) ?? 0)) * 1000;

const result = {
  measuredAt: new Date().toISOString(),
  url: baseUrl,
  viewport: { width: 1440, height: 900 },
  target: selector,
  frames,
  cpu: {
    taskDurationMs: deltaMs('TaskDuration'),
    scriptDurationMs: deltaMs('ScriptDuration'),
    layoutDurationMs: deltaMs('LayoutDuration'),
    recalcStyleDurationMs: deltaMs('RecalcStyleDuration'),
  },
  memory: {
    jsHeapUsedBytes: afterMetrics.get('JSHeapUsedSize') ?? null,
    jsHeapTotalBytes: afterMetrics.get('JSHeapTotalSize') ?? null,
  },
};

await mkdir(dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify(result, null, 2)}\n`);
await browser.close();
console.log(JSON.stringify(result, null, 2));
