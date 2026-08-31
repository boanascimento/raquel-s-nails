import React, { useState } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Preços', href: '#precos' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__shell">
        <a className="header__logo" href="#top">
          Raquel <span className="header__logo-accent">S</span> Nails
        </a>

        <button
          className="header__burger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="header__burger-label">Menu</span>
          <span className="header__burger-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div
          className={`header__collapse${menuOpen ? ' header__collapse--open' : ''}`}
          id="menu-principal"
        >
          <nav aria-label="Navegação principal">
            <ul className="header__nav">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    className="header__nav-link"
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions" />
        </div>
      </div>
    </header>
  );
}
