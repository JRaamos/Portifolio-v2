import { Link } from 'react-router-dom';
import { Header } from '../../components/v31/Header';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';

export function NotFoundPage() {
  const { text } = useLocale();
  return (
    <div className="not-found-v31">
      <Header />
      <main>
        <p>{text(siteCopy.notFound.eyebrow)}</p>
        <h1>{text(siteCopy.notFound.title)}</h1>
        <Link to="/">{text(siteCopy.notFound.action)} ↗</Link>
      </main>
    </div>
  );
}
