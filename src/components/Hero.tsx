import React from 'react';
import BrushStroke from './BrushStroke';
import HandIllustration from './HandIllustration';
import {
  NailArtIcon,
  NailExtensionIcon,
  NailPolishIcon,
} from './icons/ServiceIcons';
import './Hero.css';

const SERVICES = [
  {
    icon: <NailArtIcon />,
    title: 'Nail Art',
    description:
      'Desenhos personalizados, feitos à mão, que combinam com o seu estilo.',
  },
  {
    icon: <NailExtensionIcon />,
    title: 'Alongamento',
    description:
      'Extensão em fibra ou gel para unhas mais longas, naturais e resistentes.',
  },
  {
    icon: <NailPolishIcon />,
    title: 'Esmaltação',
    description:
      'Esmaltação tradicional, em gel e efeitos decorativos com acabamento impecável.',
  },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Pincelada decorativa de fundo */}
      <BrushStroke />

      <div className="hero__shell">
        <div className="hero__content">
          <h1 className="hero__title">
            Elegância na
            <br />
            ponta dos dedos
          </h1>

          <p className="hero__lead">
            Viva a elegância no seu melhor com as criações de nail art do nosso
            estúdio. De padrões delicados a detalhes minuciosos, aqui a
            sofisticação está a uma pincelada de distância.
          </p>

          <div className="hero__ctas">
            <a className="hero__cta" href="#contato">
              Agendar horário
            </a>

            <a className="hero__play" href="#galeria">
              <span className="hero__play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
              <span className="hero__play-label">Ver nossos trabalhos</span>
            </a>
          </div>

          <ul className="hero__services">
            {SERVICES.map((service) => (
              <li className="service" key={service.title}>
                <span className="service__icon">{service.icon}</span>
                <h2 className="service__title">{service.title}</h2>
                <p className="service__text">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__figure">
          <HandIllustration />
        </div>
      </div>
    </section>
  );
}
