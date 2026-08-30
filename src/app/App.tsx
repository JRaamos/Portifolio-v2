import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LocaleProvider } from '../context/LocaleProvider';
import { CaseStudyPage } from '../pages/v3/CaseStudyPage';
import { HomePage } from '../pages/v3/HomePage';
import { NotFoundPage } from '../pages/v3/NotFoundPage';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
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
        <LazyMotion features={domAnimation} strict>
          <MotionConfig reducedMotion="user">
            <ScrollManager />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work/:slug" element={<CaseStudyPage />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </MotionConfig>
        </LazyMotion>
      </LocaleProvider>
    </BrowserRouter>
  );
}
