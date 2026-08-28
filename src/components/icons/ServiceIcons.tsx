import React from 'react';

/**
 * Ícones de linha usados nos cards de serviço do hero.
 * São puramente decorativos: o significado vem do título do card,
 * por isso ficam com aria-hidden.
 */
const baseProps = {
  width: 40,
  height: 40,
  viewBox: '0 0 40 40',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

export function NailArtIcon() {
  return (
    <svg {...baseProps}>
      <path d="M13 34V19.5a4 4 0 0 1 8 0V34z" />
      <path d="M13 24h8" />
      <path d="M17 15.5V11" />
      <path d="M27 33V22" />
      <path d="M24 22h6l-3-9z" />
      <path d="M30.5 9.5 32 8M28 6.5V4.5M33.5 13h2" />
    </svg>
  );
}

export function NailExtensionIcon() {
  return (
    <svg {...baseProps}>
      <path d="M14 34V16a5 5 0 0 1 10 0v18z" />
      <path d="M14 22c3.4 1.6 6.6 1.6 10 0" />
      <path d="M16.5 16.5c1.9-1 3.1-1 5 0" />
      <path d="M29 12h5" />
      <path d="M31.5 9.5 34 12l-2.5 2.5" />
      <path d="M31.5 22H34" />
    </svg>
  );
}

export function NailPolishIcon() {
  return (
    <svg {...baseProps}>
      <path d="M4 30c5.5-4.5 12-6.5 19.5-6" />
      <path d="M8 33.5c5-4 10.8-5.8 17.5-5.4" />
      <path d="m24 22.5 8.5-8.5 3.5 3.5-8.5 8.5z" />
      <path d="m31 11.5 2-2 3.5 3.5-2 2" />
      <path d="M26.5 20 30 23.5" />
    </svg>
  );
}
