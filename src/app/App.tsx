import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { LocaleProvider } from '../context/LocaleProvider';
import { CaseStudyPage } from '../pages/v31/CaseStudyPage';
import { HomePage } from '../pages/v31/HomePage';
import { NotFoundPage } from '../pages/v31/NotFoundPage';
import { WhatsAppButton } from '../components/v31/WhatsAppButton';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const targetId = hash.slice(1);
      const scrollToHash = () => {
        document.getElementById(targetId)?.scrollIntoView({ block: 'start', behavior: 'auto' });
      };

      scrollToHash();
      let nestedFrame = 0;
      const frame = window.requestAnimationFrame(() => {
        scrollToHash();
        nestedFrame = window.requestAnimationFrame(() => {
          scrollToHash();
        });
      });
      return () => {
        window.cancelAnimationFrame(frame);
        window.cancelAnimationFrame(nestedFrame);
      };
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [hash, pathname]);

  return null;
}

export function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

  return (
    <BrowserRouter basename={basename}>
      <LocaleProvider>
        <ScrollManager />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </LocaleProvider>
    </BrowserRouter>
  );
}
