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
}

export interface Project {
  id: string;
  index: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  impactKey: TranslationKey;
  tags: string[];
  url: string;
}

export interface Experience {
  id: string;
  periodKey: TranslationKey;
  roleKey: TranslationKey;
  companyKey: TranslationKey;
  descriptionKey: TranslationKey;
}

export interface PortfolioData {
  socialLinks: SocialLink[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experiences: Experience[];
}
