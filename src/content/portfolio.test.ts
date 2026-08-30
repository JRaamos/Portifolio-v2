import { describe, expect, it } from 'vitest';
import { independentCases, professionalCases, workCases } from './portfolio';

describe('portfolio evidence model', () => {
  it('keeps every case addressable by a unique slug', () => {
    const slugs = workCases.map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs).toContain('learning-intelligence-platform');
    expect(slugs).toContain('automotive-crm-platform');
    expect(slugs).toContain('operations-platform');
    expect(slugs).toContain('febraio-tech');
  });

  it('separates professional work from independent products', () => {
    expect(professionalCases.length).toBeGreaterThanOrEqual(3);
    expect(independentCases).toHaveLength(4);
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
