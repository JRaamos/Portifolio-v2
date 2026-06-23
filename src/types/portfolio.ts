export type TranslationKey = string;

export interface SocialLink {
  id: string;
  labelKey: TranslationKey;
  url: string;
}
export interface SkillGroup {
  id: string;
  titleKey: TranslationKey;
  skills: string[];
  proficiency?: number;
}
export interface Project {
  id: string;
  categoryKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  tags: string[];
  visual: 'blue' | 'indigo' | 'green' | 'red' | 'amber' | 'cyan';
  featured?: boolean;
}
export interface Experience {
  id: string;
  periodKey: TranslationKey;
  roleKey: TranslationKey;
  companyKey: TranslationKey;
  descriptionKey: TranslationKey;
  tags: string[];
}
export interface Article {
  id: string;
  categoryKey: TranslationKey;
  dateKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  durationKey: TranslationKey;
}
export interface PortfolioData {
  socialLinks: SocialLink[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experiences: Experience[];
  articles: Article[];
}
