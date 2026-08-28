import React from 'react';

/**
 * Pincelada decorativa do hero.
 * O desenho é contido dentro do viewBox com pontas afinadas, para não
 * gerar corte reto quando a seção termina.
 */
export default function BrushStroke() {
  return (
    <svg
      className="hero__brush"
      viewBox="0 0 640 720"
      aria-hidden="true"
      focusable="false"
    >
      {/* Massa principal da pincelada */}
      <path
        d="M262 44c104-30 208 4 274 84 70 84 88 200 48 306-38 100-118 176-232 226-40 18-72 22-96 12 44-46 116-84 172-140 66-66 96-152 78-244C488 200 410 130 300 106c-30-6-42-30-38-62z"
        fill="var(--color-pink-100)"
      />
      {/* Reforço mais claro, deslocado como brilho da tinta */}
      <path
        d="M300 92c88 26 152 90 168 178 16 88-14 168-76 230-38 38-84 66-136 88 62-70 116-136 142-206 30-80 22-166-34-234-24-30-46-48-64-56z"
        fill="var(--color-pink-200)"
        opacity="0.55"
      />
      {/* Fiapos de cerda na borda externa */}
      <g fill="var(--color-pink-100)">
        <path d="M236 62c-14 34-6 60 22 82 34 26 58 62 66 108 6 34 2 66-10 96 22-52 24-102 4-150-16-40-44-66-72-88-14-12-18-28-10-48z" />
        <path d="M596 372c10 62-10 122-58 180-34 40-76 74-126 100 62-22 114-56 154-102 44-50 60-110 30-178z" />
      </g>
    </svg>
  );
}
