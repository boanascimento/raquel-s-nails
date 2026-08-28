import React from 'react';
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
      <svg
        className="hero__brush"
        viewBox="0 0 720 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M182 74c96-52 214-58 318-22 74 26 132 76 152 148 22 78-14 152-70 208-64 64-96 128-92 214 4 78-38 148-114 172-92 30-190-16-236-96-42-74-38-166 4-240 34-60 44-114 24-180-24-78 12-166 92-204z"
          fill="var(--color-pink-100)"
        />
        <path
          d="M262 118c74-30 158-26 226 12 52 30 80 84 72 142-8 62-52 108-98 148-52 46-72 100-62 168 10 66-26 122-90 138-78 20-152-30-176-104-22-68 4-142 52-196 40-46 54-92 40-152-14-64 22-130 96-156z"
          fill="var(--color-pink-50)"
        />
      </svg>

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
