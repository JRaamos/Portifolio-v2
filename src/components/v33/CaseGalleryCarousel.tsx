import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { useFocusCarousel } from '../../hooks/useFocusCarousel';
import type { WorkGalleryItem } from '../../types/v3';
import { OptimizedImage } from '../v31/OptimizedImage';
import { AnimatedCharacters } from './AnimatedCharacters';
import { CarouselControls } from './CarouselControls';

interface CaseGalleryCarouselProps {
  title: string;
  gallery: WorkGalleryItem[];
}

export function CaseGalleryCarousel({ title, gallery }: CaseGalleryCarouselProps) {
  const { text, locale } = useLocale();
  const {
    viewportRef,
    selectedIndex,
    canScrollPrevious,
    canScrollNext,
    scrollPrevious,
    scrollNext,
    scrollTo,
    onKeyDown,
  } = useFocusCarousel({ count: gallery.length, loop: gallery.length > 2 });
  const activeItem = gallery[selectedIndex] ?? gallery[0];
  const previousLabel = locale === 'en' ? 'Previous project image' : 'Imagem anterior do projeto';
  const nextLabel = locale === 'en' ? 'Next project image' : 'Próxima imagem do projeto';

  return (
    <section
      className="case-product-media-v31 case-gallery-v33"
      aria-labelledby="case-gallery-title-v33"
    >
      <header className="case-gallery-heading-v31">
        <p>{text(siteCopy.case.gallery)}</p>
        <span>{text(siteCopy.case.galleryNote)}</span>
      </header>

      <div className="case-gallery-v33__title" aria-live="polite">
        <p>{text(activeItem.label)}</p>
        <h2
          id="case-gallery-title-v33"
          aria-label={locale === 'en' ? `${title} product gallery` : `Galeria do produto ${title}`}
          key={`${title}-${selectedIndex}`}
        >
          <AnimatedCharacters text={title} />
        </h2>
      </div>

      <div
        className="case-gallery-v33__carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label={locale === 'en' ? `${title} product views` : `Telas do produto ${title}`}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="case-gallery-v33__viewport" ref={viewportRef}>
          <div className="case-gallery-v33__container">
            {gallery.map((item, index) => {
              const isActive = selectedIndex === index;
              return (
                <figure
                  className={`case-gallery-slide-v33 case-gallery-slide-v33--${item.fit ?? 'cover'} ${isActive ? 'is-active' : ''}`}
                  key={item.src}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} / ${gallery.length} — ${text(item.label)}`}
                >
                  <div className="case-gallery-slide-v33__media">
                    <OptimizedImage
                      src={item.src}
                      alt={text(item.alt)}
                      width={1425}
                      height={802}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    {!isActive ? (
                      <button
                        type="button"
                        className="case-gallery-slide-v33__focus"
                        onClick={() => scrollTo(index)}
                        tabIndex={-1}
                        aria-label={
                          locale === 'en'
                            ? `Bring image ${index + 1} into focus`
                            : `Trazer a imagem ${index + 1} para o foco`
                        }
                      />
                    ) : null}
                  </div>
                  <figcaption>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {text(item.label)}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>

        <CarouselControls
          current={selectedIndex}
          total={gallery.length}
          canScrollPrevious={canScrollPrevious}
          canScrollNext={canScrollNext}
          onPrevious={scrollPrevious}
          onNext={scrollNext}
          onSelect={scrollTo}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
          itemLabel={(index) =>
            locale === 'en'
              ? `Show image ${index + 1}: ${text(gallery[index].label)}`
              : `Mostrar imagem ${index + 1}: ${text(gallery[index].label)}`
          }
          className="case-gallery-v33__controls"
        />
      </div>
    </section>
  );
}
