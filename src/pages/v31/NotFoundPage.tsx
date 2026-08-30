import { Link } from 'react-router-dom';
import { HeaderV32 } from '../../components/v32/HeaderV32';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';

export function NotFoundPage() {
  const { text } = useLocale();
  return (
    <div className="not-found-v31">
      <HeaderV32 />
      <main>
        <p>{text(siteCopy.notFound.eyebrow)}</p>
        <h1>{text(siteCopy.notFound.title)}</h1>
        <Link to="/">{text(siteCopy.notFound.action)} ↗</Link>
      </main>
    </div>
  );
}
