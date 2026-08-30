import type { LocalizedText } from '../../types/v3';
import { useLocale } from '../../context/useLocale';
import { Reveal } from './Reveal';

export function SectionHeading({
  index,
  title,
  intro,
  inverse = false,
}: {
  index: LocalizedText;
  title: LocalizedText;
  intro?: LocalizedText;
  inverse?: boolean;
}) {
  const { text } = useLocale();

  return (
    <Reveal className={`section-heading${inverse ? ' section-heading--inverse' : ''}`}>
      <p className="section-index">{text(index)}</p>
      <div>
        <h2>{text(title)}</h2>
        {intro ? <p>{text(intro)}</p> : null}
      </div>
    </Reveal>
  );
}
