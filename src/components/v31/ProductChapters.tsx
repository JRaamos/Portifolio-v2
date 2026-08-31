import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { independentCases, siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { useFocusCarousel } from '../../hooks/useFocusCarousel';
import { AnimatedCharacters } from '../v33/AnimatedCharacters';
import { CarouselControls } from '../v33/CarouselControls';
import { OptimizedImage } from './OptimizedImage';

const productFlows: Record<string, string[]> = {
  'febraio-tech': ['STOREFRONT', 'API', 'COMMERCE RULES', 'DATA'],
  'manual-dos-achados': ['DISCOVERY', 'EDITORIAL MODEL', 'RANKING', 'SEARCH'],
  'crypto-ai': ['MARKET DATA', 'ANALYSIS', 'AI BOUNDARY', 'REVIEW'],
  timebubble: ['JAVASCRIPT UI', 'NATIVE BRIDGE', 'OVERLAY', 'GOOGLE PLAY'],
  'sistema-de-agendamento': ['BOOKING', 'EXPRESS API', 'MYSQL', 'CALENDAR'],
  buildbalance: ['PROJECT', 'DOMAIN RULES', 'LEDGER', 'AUDIT'],
};

const featuredProductOrder = [
  'crypto-ai',
  'timebubble',
  'febraio-tech',
  'sistema-de-agendamento',
  'manual-dos-achados',
  'buildbalance',
];

export function ProductChapters() {
  const { text, locale } = useLocale();
  const products = featuredProductOrder
    .map((slug) => independentCases.find((work) => work.slug === slug))
    .filter((work): work is (typeof independentCases)[number] => Boolean(work));
  const {
    viewportRef,
    selectedIndex,
    canScrollPrevious,
    canScrollNext,
    scrollPrevious,
    scrollNext,
    scrollTo,
    onKeyDown,
  } = useFocusCarousel({ count: products.length });
  const activeProduct = products[selectedIndex] ?? products[0];
  const previousLabel = locale === 'en' ? 'Previous project' : 'Projeto anterior';
  const nextLabel = locale === 'en' ? 'Next project' : 'Próximo projeto';

  return (
    <section className="products-v31 products-reel-v33" aria-labelledby="products-title-v31">
      <header className="section-heading-v31 products-heading-v31">
        <p>{text(siteCopy.independent.index)}</p>
        <h2 id="products-title-v31">{text(siteCopy.independent.title)}</h2>
        <span>{text(siteCopy.independent.intro)}</span>
      </header>

      <div className="project-reel-v33__active-heading" aria-live="polite">
        <p>
          {String(selectedIndex + 1).padStart(2, '0')} / {text(activeProduct.eyebrow)}
        </p>
        <h3 aria-label={activeProduct.title} key={activeProduct.slug}>
          <AnimatedCharacters text={activeProduct.title} />
        </h3>
        <span>
          {locale === 'en'
            ? 'Drag the reel, use the arrow keys or choose a control.'
            : 'Arraste o reel, use as setas do teclado ou escolha um controle.'}
        </span>
      </div>

      <div
        className="project-reel-v33"
        role="region"
        aria-roledescription="carousel"
        aria-label={locale === 'en' ? 'Independent projects' : 'Projetos independentes'}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="project-reel-v33__viewport" ref={viewportRef}>
          <div className="project-reel-v33__container">
            {products.map((work, index) => {
              const flow = productFlows[work.slug];
              const isActive = index === selectedIndex;
              const mobilePreview =
                work.preview === 'mobile-trio' ? work.gallery?.slice(0, 3) : undefined;
              const openLabel = locale === 'en' ? 'Open product case' : 'Abrir case do produto';
              return (
                <article
                  className={`project-slide-v33 project-slide-v33--${work.imageFit ?? 'cover'} ${isActive ? 'is-active' : ''}`}
                  key={work.slug}
                  style={
                    work.image
                      ? ({ '--project-preview': `url("${work.image}")` } as CSSProperties)
                      : undefined
                  }
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} / ${products.length} — ${work.title}`}
                >
                  <div className="project-slide-v33__media">
                    {mobilePreview?.length ? (
                      <div className="project-slide-v33__mobile-preview" aria-hidden="true">
                        {mobilePreview.map((item, previewIndex) => (
                          <OptimizedImage
                            key={item.src}
                            src={item.src}
                            alt=""
                            width={145}
                            height={296}
                            loading={index === 0 && previewIndex === 0 ? 'eager' : 'lazy'}
                          />
                        ))}
                      </div>
                    ) : work.image ? (
                      <OptimizedImage
                        src={work.image}
                        alt={work.imageAlt ? text(work.imageAlt) : `${work.title} interface`}
                        width={1280}
                        height={720}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    ) : null}
                    <div className="project-slide-v33__shade" aria-hidden="true" />
                    <div
                      className="project-slide-v33__flow"
                      aria-label={`${work.title} system flow`}
                    >
                      {flow.map((item, flowIndex) => (
                        <span key={item}>
                          {item}
                          {flowIndex < flow.length - 1 ? <i aria-hidden="true" /> : null}
                        </span>
                      ))}
                    </div>
                    {isActive ? (
                      <Link
                        className="project-slide-v33__media-link"
                        to={`/work/${work.slug}`}
                        aria-label={`${openLabel}: ${work.title}`}
                        draggable={false}
                      />
                    ) : (
                      <button
                        className="project-slide-v33__focus"
                        type="button"
                        onClick={() => scrollTo(index)}
                        aria-label={
                          locale === 'en'
                            ? `Bring ${work.title} into focus`
                            : `Trazer ${work.title} para o foco`
                        }
                      />
                    )}
                  </div>
                  <div
                    className="project-slide-v33__copy"
                    aria-hidden={isActive ? undefined : true}
                  >
                    <p>{text(work.summary)}</p>
                    <ul>
                      {work.stack.slice(0, 6).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link tabIndex={isActive ? 0 : -1} to={`/work/${work.slug}`}>
                      {openLabel} <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <CarouselControls
          current={selectedIndex}
          total={products.length}
          canScrollPrevious={canScrollPrevious}
          canScrollNext={canScrollNext}
          onPrevious={scrollPrevious}
          onNext={scrollNext}
          onSelect={scrollTo}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
          itemLabel={(index) =>
            locale === 'en'
              ? `Show project ${index + 1}: ${products[index].title}`
              : `Mostrar projeto ${index + 1}: ${products[index].title}`
          }
          className="project-reel-v33__controls"
        />
      </div>
    </section>
  );
}
