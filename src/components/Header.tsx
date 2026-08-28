import React, { useState } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Preços', href: '#precos' },
];

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.5 6.5h11l-1 10.5h-9z" />
      <path d="M7.5 6.5V5a2.5 2.5 0 0 1 5 0v1.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10" cy="10" r="7.5" />
      <circle cx="10" cy="8" r="2.6" />
      <path d="M5.6 16.3a5 5 0 0 1 8.8 0" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__shell">
        <a className="header__logo" href="#top">
          raquel<span className="header__logo-accent">&apos;s</span> nails
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

          <div className="header__actions">
            <a className="header__action" href="#precos">
              <CartIcon />
              <span>Carrinho</span>
            </a>
            <a className="header__action" href="#contato">
              <UserIcon />
              <span>Entrar</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
