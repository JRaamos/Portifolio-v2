import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
}

function setMeta(selector: string, value: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', value);
}

export function useDocumentMeta({ title, description, image, canonical }: DocumentMeta) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    if (image) {
      setMeta('meta[property="og:image"]', image);
      setMeta('meta[name="twitter:image"]', image);
    }

    if (canonical) {
      document
        .querySelector<HTMLLinkElement>('link[rel="canonical"]')
        ?.setAttribute('href', canonical);
      setMeta('meta[property="og:url"]', canonical);
    }
  }, [canonical, description, image, title]);
}
