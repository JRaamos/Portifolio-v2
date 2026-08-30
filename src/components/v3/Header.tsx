import { AnimatePresence, m } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { LanguageSwitch } from './LanguageSwitch';

export function Header() {
  const { text } = useLocale();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const anchor = (id: string) => (pathname === '/' ? `#${id}` : `/#${id}`);
  const navItems = [
    [text(siteCopy.nav.work), anchor('work')],
    [text(siteCopy.nav.system), anchor('system')],
    [text(siteCopy.nav.about), anchor('about')],
    [text(siteCopy.nav.contact), anchor('contact')],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          className="brand-mark"
          to="/"
          aria-label="Jonathan Febraio — home"
          onClick={() => setOpen(false)}
        >
          <span>JF</span>
          <i aria-hidden="true" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} to={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={text(open ? siteCopy.nav.close : siteCopy.nav.menu)}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <m.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {navItems.map(([label, href], index) => (
              <m.div
                key={href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index }}
              >
                <Link to={href} onClick={() => setOpen(false)}>
                  <span>0{index + 1}</span>
                  {label}
                </Link>
              </m.div>
            ))}
          </m.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
