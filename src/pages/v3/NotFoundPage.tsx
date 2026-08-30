import { Link } from 'react-router-dom';
import { Footer } from '../../components/v3/Footer';
import { Header } from '../../components/v3/Header';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

export function NotFoundPage() {
  const { text } = useLocale();
  useDocumentMeta({ title: '404 — Jonathan Febraio', description: 'Portfolio route not found.' });
  return (
    <div className="not-found">
      <Header />
      <main className="section-shell">
        <p>{text(siteCopy.notFound.eyebrow)}</p>
        <h1>{text(siteCopy.notFound.title)}</h1>
        <Link to="/">{text(siteCopy.notFound.action)} →</Link>
      </main>
      <Footer />
    </div>
  );
}
