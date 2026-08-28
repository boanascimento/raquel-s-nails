import React from 'react';
import './SocialLinks.css';

const SOCIALS = [
  { id: 'ig', label: 'Instagram', href: 'https://www.instagram.com/raquel.s.nails/' },
  { id: 'fb', label: 'Facebook', href: 'https://www.facebook.com/raquel.souza.617204' },
];

export default function SocialLinks() {
  return (
    <ul className="socials" aria-label="Redes sociais">
      {SOCIALS.map((social) => (
        <li key={social.id}>
          <a
            className="socials__link"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">{social.id}</span>
            <span className="socials__sr">{social.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
