export type TranslationKey = string;

export interface SocialLink {
  id: string;
  labelKey: TranslationKey;
  url: string;
}
export interface SkillGroup {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  skills: string[];
}
export interface Project {
  id: string;
  categoryKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  problemKey: TranslationKey;
  roleKey: TranslationKey;
  architectureKey: TranslationKey;
  decisionsKey: TranslationKey;
  qualityKey: TranslationKey;
  deploymentKey: TranslationKey;
  image: string;
  imageAltKey: TranslationKey;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  accessKey?: TranslationKey;
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
export interface PortfolioData {
  socialLinks: SocialLink[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experiences: Experience[];
}
