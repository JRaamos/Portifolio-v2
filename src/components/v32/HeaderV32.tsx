import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useHeaderState } from '../../hooks/useHeaderState';
import { LanguageSwitch } from '../v31/LanguageSwitch';
import { BrandMark } from './BrandMark';

const sectionIds = ['work', 'system', 'about', 'contact'] as const;

export function HeaderV32() {
  const { pathname } = useLocation();
  const { text, locale } = useLocale();
  const scrolled = useHeaderState();
  const activeSection = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ x: 0, width: 0, visible: false });
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const wasOpenRef = useRef(false);
  const isCaseStudy = pathname.startsWith('/work/');
  const targetSection = hoveredSection ?? activeSection;

  const links = useMemo(
    () => [
      { id: 'work', href: '/#work', label: text(siteCopy.nav.work) },
      { id: 'system', href: '/#system', label: text(siteCopy.nav.system) },
      { id: 'about', href: '/#about', label: text(siteCopy.nav.about) },
      { id: 'contact', href: '/#contact', label: text(siteCopy.nav.contact) },
    ],
    [text],
  );

  useLayoutEffect(() => {
    const nav = navRef.current;
    const target = targetSection ? linkRefs.current.get(targetSection) : null;
    if (!nav || !target) {
      setIndicator((current) => ({ ...current, visible: false }));
      return;
    }

    const update = () => {
      const navRect = nav.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      setIndicator({ x: targetRect.left - navRect.left, width: targetRect.width, visible: true });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(nav);
    return () => observer.disconnect();
  }, [targetSection, locale, isCaseStudy]);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) toggleRef.current?.focus();
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusable = () =>
      [...(menuRef.current?.querySelectorAll<HTMLElement>('a, button') ?? [])].filter(
        (element) => !element.hasAttribute('disabled'),
      );
    window.requestAnimationFrame(() => focusable()[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items.at(-1)!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const indicatorStyle = {
    '--nav-signal-x': `${indicator.x}px`,
    '--nav-signal-width': `${indicator.width}px`,
    '--nav-signal-opacity': indicator.visible ? 1 : 0,
  } as CSSProperties;

  return (
    <header
      className={`site-header-v32 ${scrolled ? 'is-scrolled' : 'is-top'} ${isCaseStudy ? 'is-case' : ''}`}
      data-header-state={isCaseStudy ? 'case' : scrolled ? 'scroll' : 'top'}
    >
      <Link
        className="site-brand-v32"
        to="/"
        aria-label="Jonathan Febraio — home"
        onClick={() => setOpen(false)}
      >
        <BrandMark size={44} animated showWordmark compact={scrolled || isCaseStudy} />
      </Link>

      {isCaseStudy ? (
        <Link className="case-back-v32" to="/#work">
          <span aria-hidden="true">←</span>
          {locale === 'en' ? 'Back to work' : 'Voltar aos projetos'}
        </Link>
      ) : (
        <nav
          ref={navRef}
          className="desktop-nav-v32"
          aria-label={locale === 'en' ? 'Primary navigation' : 'Navegação principal'}
          style={indicatorStyle}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              ref={(element) => {
                if (element) linkRefs.current.set(link.id, element);
                else linkRefs.current.delete(link.id);
              }}
              aria-current={activeSection === link.id ? 'location' : undefined}
              onMouseEnter={() => setHoveredSection(link.id)}
            >
              {link.label}
            </Link>
          ))}
          <i className="desktop-nav-v32__signal" aria-hidden="true" />
        </nav>
      )}

      <div className="header-actions-v32">
        <LanguageSwitch />
        <Link className="header-cta-v32" to="/#contact">
          {locale === 'en' ? 'Let’s talk' : 'Vamos conversar'} <span aria-hidden="true">↗</span>
        </Link>
        <button
          ref={toggleRef}
          className="menu-toggle-v32"
          type="button"
          aria-label={open ? text(siteCopy.nav.close) : text(siteCopy.nav.menu)}
          aria-expanded={open}
          aria-controls="mobile-navigation-v32"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-navigation-v32"
          ref={menuRef}
          className="mobile-nav-v32"
          aria-label={locale === 'en' ? 'Mobile navigation' : 'Navegação móvel'}
        >
          <div className="mobile-nav-v32__meta">
            <span>JF SIGNAL</span>
            <span>{locale === 'en' ? 'SYSTEM INDEX' : 'ÍNDICE DO SISTEMA'}</span>
          </div>
          {links.map((link, index) => (
            <Link
              key={link.id}
              to={link.href}
              aria-current={activeSection === link.id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              <strong>{link.label}</strong>
              <i aria-hidden="true">↘</i>
            </Link>
          ))}
          <Link className="mobile-nav-v32__contact" to="/#contact" onClick={() => setOpen(false)}>
            {locale === 'en' ? 'Start a conversation' : 'Iniciar uma conversa'} ↗
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
