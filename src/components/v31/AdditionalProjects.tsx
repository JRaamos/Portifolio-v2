import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { additionalProjects, siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';

gsap.registerPlugin(ScrollTrigger);

export function AdditionalProjects() {
  const { text } = useLocale();
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.utils.toArray<HTMLElement>('.additional-project-v31').forEach((project) => {
        gsap.from(project, {
          opacity: 0,
          y: 42,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 88%',
            once: true,
          },
        });
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      className="additional-projects-v31"
      aria-labelledby="additional-projects-title-v31"
      ref={rootRef}
    >
      <header className="section-heading-v31 additional-projects-heading-v31">
        <p>{text(siteCopy.additional.index)}</p>
        <h2 id="additional-projects-title-v31">{text(siteCopy.additional.title)}</h2>
        <span>{text(siteCopy.additional.intro)}</span>
      </header>

      <div className="additional-projects-list-v31">
        {additionalProjects.map((project, index) => (
          <a
            className="additional-project-v31"
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            key={project.title}
          >
            <span className="additional-project-v31__index">0{index + 1}</span>
            <div className="additional-project-v31__copy">
              <h3>{project.title}</h3>
              <p>{text(project.summary)}</p>
              <ul aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="repo-signal-v31" aria-hidden="true">
              {project.flow.map((item, flowIndex) => (
                <span key={item}>
                  <i />
                  <b>{item}</b>
                  {flowIndex < project.flow.length - 1 ? <em /> : null}
                </span>
              ))}
            </div>
            <span className="additional-project-v31__action">
              {text(siteCopy.additional.source)} <i aria-hidden="true">↗</i>
            </span>
          </a>
        ))}
      </div>

      <a
        className="additional-projects-all-v31"
        href="https://github.com/JRaamos?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        {text(siteCopy.additional.all)} <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
