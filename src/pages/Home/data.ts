import type { PortfolioData } from '../../types/portfolio';

export const portfolioData: PortfolioData = {
  socialLinks: [
    { id: 'github', labelKey: 'social.github', url: 'https://github.com/jonathanfebraio' },
    {
      id: 'linkedin',
      labelKey: 'social.linkedin',
      url: 'https://www.linkedin.com/in/jonathanfebraio/',
    },
    { id: 'email', labelKey: 'social.email', url: 'mailto:contato@jonathanfebraio.dev' },
  ],
  skillGroups: [
    {
      id: 'frontend',
      titleKey: 'skills.frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'Styled Components', 'HTML', 'CSS'],
    },
    {
      id: 'architecture',
      titleKey: 'skills.architecture',
      skills: ['Design Systems', 'Component Architecture', 'REST', 'Git', 'Vite'],
    },
    {
      id: 'quality',
      titleKey: 'skills.quality',
      skills: ['Accessibility', 'Performance', 'Responsive UI', 'Testing', 'SEO'],
    },
  ],
  projects: [
    {
      id: 'aurora',
      index: '01',
      titleKey: 'projects.aurora.title',
      descriptionKey: 'projects.aurora.description',
      impactKey: 'projects.aurora.impact',
      tags: ['React', 'TypeScript', 'Design System'],
      url: 'https://github.com/jonathanfebraio',
    },
    {
      id: 'atlas',
      index: '02',
      titleKey: 'projects.atlas.title',
      descriptionKey: 'projects.atlas.description',
      impactKey: 'projects.atlas.impact',
      tags: ['React', 'Vite', 'Performance'],
      url: 'https://github.com/jonathanfebraio',
    },
    {
      id: 'nexo',
      index: '03',
      titleKey: 'projects.nexo.title',
      descriptionKey: 'projects.nexo.description',
      impactKey: 'projects.nexo.impact',
      tags: ['TypeScript', 'Accessibility', 'UX'],
      url: 'https://github.com/jonathanfebraio',
    },
  ],
  experiences: [
    {
      id: 'current',
      periodKey: 'experience.currentPeriod',
      roleKey: 'experience.currentRole',
      companyKey: 'experience.currentCompany',
      descriptionKey: 'experience.currentDescription',
    },
    {
      id: 'previous',
      periodKey: 'experience.previousPeriod',
      roleKey: 'experience.previousRole',
      companyKey: 'experience.previousCompany',
      descriptionKey: 'experience.previousDescription',
    },
  ],
};
