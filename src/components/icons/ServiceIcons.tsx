import React from 'react';

/**
 * Ícones de linha usados nos cards de serviço do hero.
 * São decorativos: o significado vem do título do card, por isso ficam
 * com aria-hidden.
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

/** Unha decorada com pontinhos de nail art e brilhos ao lado. */
export function NailArtIcon() {
  return (
    <svg {...baseProps}>
      <path d="M12 34V19.5a5.5 5.5 0 0 1 11 0V34z" />
      <path d="M12 27c3.6 1.7 7.4 1.7 11 0" />
      <circle cx="16.4" cy="22.4" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20.6" cy="21.4" r="1.2" fill="currentColor" stroke="none" />
      <path d="M30 10v5.5M27.2 12.7h5.6" />
      <path d="M34 21v3.4M32.3 22.7h3.4" />
    </svg>
  );
}

/** Unha alongada: a linha tracejada marca o comprimento original. */
export function NailExtensionIcon() {
  return (
    <svg {...baseProps}>
      <path d="M13 34V19a5.5 5.5 0 0 1 11 0v15z" />
      <path d="M13 27c3.6 1.7 7.4 1.7 11 0" />
      <path d="M13.4 21.5h10.2" strokeDasharray="3 2.5" />
      <path d="M31 27.5V13" />
      <path d="m27.5 16.5 3.5-3.5 3.5 3.5" />
    </svg>
  );
}

/** Vidro de esmalte com uma pincelada. */
export function NailPolishIcon() {
  return (
    <svg {...baseProps}>
      <path d="M12 34v-8.5c0-2.4 1.2-3.7 2.8-4.5V18h5.4v3c1.6.8 2.8 2.1 2.8 4.5V34z" />
      <path d="M14.8 18v-4.2c0-.9.7-1.6 1.6-1.6h2.2c.9 0 1.6.7 1.6 1.6V18" />
      <path d="M12 27.5h11" />
      <path d="M26.5 32c2.6-5.2 5.6-7.8 9-7.8" />
      <path d="M29.5 17.5c2.4 0 4.4 1.6 5 4" />
    </svg>
  );
}
