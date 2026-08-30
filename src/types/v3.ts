export type Locale = 'en' | 'pt';

export type LocalizedText = Record<Locale, string>;

export type WorkKind = 'professional' | 'independent';

export interface WorkCase {
  slug: string;
  kind: WorkKind;
  title: string;
  eyebrow: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  period: string;
  image?: string;
  imageAlt?: LocalizedText;
  liveUrl?: string;
  sourceUrl?: string;
  sourceLabel?: LocalizedText;
  disciplines: LocalizedText[];
  stack: string[];
  challenge: LocalizedText;
  contribution: LocalizedText[];
  architecture: Array<{
    label: LocalizedText;
    value: LocalizedText;
  }>;
  decisions: LocalizedText[];
  quality: LocalizedText[];
  evidence: LocalizedText[];
  confidentiality?: LocalizedText;
  accent: 'orange' | 'ink' | 'sand';
}

export interface ExperienceEntry {
  id: string;
  period: string;
  role: LocalizedText;
  company: string;
  summary: LocalizedText;
  stack: string[];
}
