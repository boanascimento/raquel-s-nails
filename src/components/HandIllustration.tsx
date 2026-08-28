import React from 'react';

/**
 * Ilustração vetorial de uma mão com nail art.
 * Feita em SVG para o hero não depender de imagem externa
 * (mantém o bundle leve e nítido em qualquer densidade de tela).
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
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6d6c2" />
          <stop offset="100%" stopColor="#e7b79c" />
        </linearGradient>
        <linearGradient id="skinSoft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f9e0d0" />
          <stop offset="100%" stopColor="#eec1a8" />
        </linearGradient>
      </defs>

      {/* Antebraço */}
      <path
        d="M150 430h140v130H150z"
        fill="url(#skinSoft)"
        transform="rotate(6 220 495)"
      />

      {/* Polegar */}
      <g transform="rotate(-32 120 360)">
        <rect
          x="72"
          y="250"
          width="62"
          height="150"
          rx="31"
          fill="url(#skinSoft)"
        />
        <ellipse cx="103" cy="272" rx="20" ry="25" fill="#f3cfc4" />
        <ellipse cx="103" cy="272" rx="20" ry="25" fill="none" stroke="#e0aa9c" strokeWidth="1.5" />
        <circle cx="97" cy="266" r="3" fill="#8e9ad6" />
        <circle cx="108" cy="277" r="3" fill="#e7b06a" />
      </g>

      {/* Palma */}
      <path
        d="M118 258h190c14 0 24 11 24 25v112c0 48-33 79-84 79h-70c-51 0-84-31-84-79V283c0-14 10-25 24-25z"
        fill="url(#skin)"
      />

      {/* Dedo mínimo */}
      <g>
        <rect x="288" y="196" width="48" height="180" rx="24" fill="url(#skinSoft)" />
        <ellipse cx="312" cy="216" rx="17" ry="21" fill="#f3cfc4" stroke="#e0aa9c" strokeWidth="1.5" />
        <path d="M303 214h18" stroke="#c9739a" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Anelar */}
      <g>
        <rect x="230" y="150" width="52" height="226" rx="26" fill="url(#skinSoft)" />
        <ellipse cx="256" cy="172" rx="19" ry="24" fill="#f3cfc4" stroke="#e0aa9c" strokeWidth="1.5" />
        <circle cx="250" cy="167" r="3.4" fill="#e79a3f" />
        <circle cx="262" cy="178" r="3.4" fill="#8e9ad6" />
        {/* Anel */}
        <rect x="228" y="318" width="56" height="16" rx="8" fill="#f4dbe0" stroke="#e2b9c2" strokeWidth="1.5" />
      </g>

      {/* Dedo médio */}
      <g>
        <rect x="170" y="128" width="54" height="248" rx="27" fill="url(#skinSoft)" />
        <ellipse cx="197" cy="151" rx="20" ry="25" fill="#f3cfc4" stroke="#e0aa9c" strokeWidth="1.5" />
        <path d="M188 158c4-10 10-14 18-12" stroke="#7f8ccd" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="203" cy="145" r="3.2" fill="#dd7f8c" />
      </g>

      {/* Indicador */}
      <g>
        <rect x="112" y="158" width="52" height="218" rx="26" fill="url(#skinSoft)" />
        <ellipse cx="138" cy="180" rx="19" ry="24" fill="#f3cfc4" stroke="#e0aa9c" strokeWidth="1.5" />
        <rect x="129" y="172" width="18" height="5" rx="2.5" fill="#7f8ccd" />
        <circle cx="138" cy="188" r="3.2" fill="#e79a3f" />
      </g>

      {/* Pulseira de contas */}
      <g fill="#f0cdd6" stroke="#e0b2be" strokeWidth="1.2">
        <circle cx="152" cy="452" r="11" />
        <circle cx="178" cy="461" r="11" />
        <circle cx="205" cy="466" r="11" />
        <circle cx="232" cy="464" r="11" />
        <circle cx="258" cy="456" r="11" />
      </g>
    </svg>
  );
}
