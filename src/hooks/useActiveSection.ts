import { useCallback, useEffect, useState } from 'react';

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(() => {
    const hashSection = window.location.hash.slice(1);
    return sectionIds.some((sectionId) => sectionId === hashSection) ? hashSection : null;
  });
  const key = sectionIds.join('|');
  const selectSection = useCallback((sectionId: string) => setActiveSection(sectionId), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target.id, entry.intersectionRatio));
        const visible = [...ratios.entries()]
          .filter(([, ratio]) => ratio > 0)
          .sort((a, b) => b[1] - a[1]);
        if (visible[0]) setActiveSection(visible[0][0]);
      },
      { rootMargin: '-28% 0px -56% 0px', threshold: [0, 0.08, 0.2, 0.45, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [key, sectionIds]);

  return { activeSection, selectSection };
}
