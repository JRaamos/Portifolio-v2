import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteCopy } from '../../content/portfolio';
import { useLocale } from '../../context/useLocale';
import { LanguageSwitch } from './LanguageSwitch';

export function Header() {
  const { text } = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/#work', label: text(siteCopy.nav.work) },
    { href: '/#system', label: text(siteCopy.nav.system) },
    { href: '/#about', label: text(siteCopy.nav.about) },
    { href: '/#contact', label: text(siteCopy.nav.contact) },
  ];

  return (
    <header className="site-header-v31">
      <Link
        className="site-mark-v31"
        to="/"
        aria-label="Jonathan Febraio — home"
        onClick={() => setOpen(false)}
      >
        <span>JF</span>
        <i aria-hidden="true" />
      </Link>
      <nav className="desktop-nav-v31" aria-label="Primary navigation">
        {links.map((link) => (
          <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions-v31">
        <LanguageSwitch />
        <button
          className="menu-toggle-v31"
          type="button"
          aria-label={open ? text(siteCopy.nav.close) : text(siteCopy.nav.menu)}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        className={`mobile-nav-v31 ${open ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {links.map((link, index) => (
          <Link
            key={link.href}
            to={link.href}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            <span>0{index + 1}</span>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
