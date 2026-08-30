import { describe, expect, it } from 'vitest';
import { independentCases, professionalCases, workCases } from './portfolio';

describe('portfolio evidence model', () => {
  it('keeps every case addressable by a unique slug', () => {
    const slugs = workCases.map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs).toContain('magventure-platform');
    expect(slugs).toContain('time-bubble');
  });

  it('separates professional work from independent products', () => {
    expect(professionalCases.length).toBeGreaterThanOrEqual(3);
    expect(professionalCases.every((item) => item.kind === 'professional')).toBe(true);
    expect(independentCases.every((item) => item.kind === 'independent')).toBe(true);
  });

  it('publishes an explicit evidence boundary for every case', () => {
    for (const work of workCases) {
      expect(work.evidence.length).toBeGreaterThan(0);
      expect(work.evidence.every((item) => item.en.length > 20 && item.pt.length > 20)).toBe(true);
    }
  });
});
