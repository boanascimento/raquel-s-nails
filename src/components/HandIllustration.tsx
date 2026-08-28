import React from 'react';

/**
 * Ilustração vetorial de uma mão com nail art.
 * Feita em SVG para o hero não depender de imagem externa
 * (bundle leve e nitidez em qualquer densidade de tela).
 */
export default function HandIllustration() {
  return (
    <svg
      className="hand"
      viewBox="0 0 420 560"
      role="img"
      aria-label="Ilustração de uma mão com unhas decoradas em nail art"
    >
      <defs>
        <linearGradient id="rnSkin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7d9c7" />
          <stop offset="100%" stopColor="#e6b69b" />
        </linearGradient>
        <linearGradient id="rnSkinSoft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fae3d4" />
          <stop offset="100%" stopColor="#eec2a9" />
        </linearGradient>
        <linearGradient id="rnNail" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbe7e2" />
          <stop offset="100%" stopColor="#f0cbc0" />
        </linearGradient>
      </defs>

      {/* Polegar: desenhado antes da palma para a base ficar encaixada */}
      <g transform="rotate(-26 128 400)">
        <rect
          x="64"
          y="238"
          width="66"
          height="200"
          rx="33"
          fill="url(#rnSkinSoft)"
        />
        <ellipse
          cx="97"
          cy="262"
          rx="20"
          ry="26"
          fill="url(#rnNail)"
          stroke="#e2ab9b"
          strokeWidth="1.4"
        />
        <circle cx="91" cy="256" r="3.2" fill="#8e9ad6" />
        <circle cx="102" cy="268" r="3.2" fill="#e7b06a" />
      </g>

      {/* Dedos */}
      <g>
        {/* Indicador */}
        <rect x="116" y="150" width="54" height="230" rx="27" fill="url(#rnSkinSoft)" />
        {/* Médio */}
        <rect x="172" y="122" width="56" height="258" rx="28" fill="url(#rnSkinSoft)" />
        {/* Anelar */}
        <rect x="230" y="146" width="54" height="234" rx="27" fill="url(#rnSkinSoft)" />
        {/* Mínimo */}
        <rect x="286" y="196" width="48" height="184" rx="24" fill="url(#rnSkinSoft)" />
      </g>

      {/* Unhas com nail art */}
      <g stroke="#e2ab9b" strokeWidth="1.4">
        <ellipse cx="143" cy="173" rx="19" ry="24" fill="url(#rnNail)" />
        <ellipse cx="200" cy="146" rx="20" ry="25" fill="url(#rnNail)" />
        <ellipse cx="257" cy="169" rx="19" ry="24" fill="url(#rnNail)" />
        <ellipse cx="310" cy="218" rx="17" ry="22" fill="url(#rnNail)" />
      </g>
      <g>
        <rect x="134" y="166" width="18" height="5" rx="2.5" fill="#7f8ccd" />
        <circle cx="143" cy="181" r="3.2" fill="#e79a3f" />
        <path
          d="M191 153c4-10 10-14 18-12"
          fill="none"
          stroke="#7f8ccd"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="206" cy="140" r="3.2" fill="#dd7f8c" />
        <circle cx="251" cy="164" r="3.4" fill="#e79a3f" />
        <circle cx="263" cy="175" r="3.4" fill="#8e9ad6" />
        <path
          d="M302 216h16"
          stroke="#c9739a"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Palma e pulso, cobrindo a base dos dedos */}
      <path
        d="M122 300h178c16 0 28 12 28 28v96c0 46-30 76-80 76h-66c-50 0-80-30-80-76v-96c0-16 12-28 20-28z"
        fill="url(#rnSkin)"
      />
      <path
        d="M158 486h124l18 74H140z"
        fill="url(#rnSkinSoft)"
      />

      {/* Anel no anelar */}
      <rect
        x="229"
        y="330"
        width="56"
        height="16"
        rx="8"
        fill="#f6dee3"
        stroke="#e2b9c2"
        strokeWidth="1.4"
      />

      {/* Pulseira de contas */}
      <g fill="#f2d2da" stroke="#e0b2be" strokeWidth="1.2">
        <circle cx="156" cy="478" r="11" />
        <circle cx="182" cy="487" r="11" />
        <circle cx="209" cy="491" r="11" />
        <circle cx="236" cy="488" r="11" />
        <circle cx="261" cy="479" r="11" />
      </g>
    </svg>
  );
}
