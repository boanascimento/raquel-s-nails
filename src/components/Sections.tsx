import React from 'react';
import './Sections.css';

const GALLERY = [
  { name: 'Francesinha moderna', palette: ['#f7ddd6', '#e3b7ad'] },
  { name: 'Nail art geométrica', palette: ['#e6e3f4', '#b9b6dd'] },
  { name: 'Nude com pedrarias', palette: ['#f4e7dc', '#d9bfa6'] },
  { name: 'Encapsulada floral', palette: ['#fbe6ec', '#e9adc0'] },
  { name: 'Degradê baby boomer', palette: ['#f2f0ec', '#d8d2c9'] },
  { name: 'Cromada espelhada', palette: ['#e0e7ea', '#adbcc4'] },
];

const PLANS = [
  {
    name: 'Essencial',
    price: '90',
    description: 'Para manter as unhas sempre em ordem.',
    items: ['Manicure completa', 'Esmaltação tradicional', 'Cutilagem suave'],
    featured: false,
  },
  {
    name: 'Signature',
    price: '160',
    description: 'O nosso serviço mais pedido.',
    items: [
      'Alongamento em fibra ou gel',
      'Esmaltação em gel',
      'Nail art em duas unhas',
      'Hidratação das cutículas',
    ],
    featured: true,
  },
  {
    name: 'Studio',
    price: '240',
    description: 'Experiência completa, com hora marcada exclusiva.',
    items: [
      'Alongamento premium',
      'Nail art em todas as unhas',
      'Spa de mãos',
      'Retoque em 15 dias',
    ],
    featured: false,
  },
];

export function About() {
  return (
    <section className="section section--about" id="sobre">
      <div className="section__shell section__shell--split">
        <div>
          <p className="section__eyebrow">Sobre nós</p>
          <h2 className="section__title">
            Um estúdio pensado no cuidado com cada detalhe
          </h2>
        </div>
        <div className="about__text">
          <p>
            O Raquel&apos;s Nails nasceu da vontade de transformar o cuidado com
            as unhas em um ritual tranquilo. Trabalhamos com atendimento
            individual, hora marcada e materiais esterilizados a cada
            procedimento.
          </p>
          <p>
            Cada desenho é criado junto com você, respeitando o formato natural
            da sua unha e a sua rotina. O resultado é um acabamento que dura e
            que continua parecendo seu.
          </p>
          <dl className="about__stats">
            <div>
              <dt>8 anos</dt>
              <dd>de estúdio</dd>
            </div>
            <div>
              <dt>2.400+</dt>
              <dd>atendimentos</dd>
            </div>
            <div>
              <dt>4,9</dt>
              <dd>avaliação média</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="section__shell">
        <p className="section__eyebrow">Galeria</p>
        <h2 className="section__title section__title--center">
          Trabalhos recentes
        </h2>
        <ul className="gallery">
          {GALLERY.map((item) => (
            <li className="gallery__item" key={item.name}>
              <div
                className="gallery__thumb"
                style={{
                  background: `linear-gradient(140deg, ${item.palette[0]}, ${item.palette[1]})`,
                }}
                aria-hidden="true"
              >
                <span className="gallery__nail" />
                <span className="gallery__nail" />
                <span className="gallery__nail" />
              </div>
              <p className="gallery__caption">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="section section--pricing" id="precos">
      <div className="section__shell">
        <p className="section__eyebrow">Preços</p>
        <h2 className="section__title section__title--center">
          Escolha o seu serviço
        </h2>
        <ul className="plans">
          {PLANS.map((plan) => (
            <li
              className={`plan${plan.featured ? ' plan--featured' : ''}`}
              key={plan.name}
            >
              {plan.featured && <span className="plan__tag">Mais pedido</span>}
              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__price">
                <span className="plan__currency">R$</span>
                {plan.price}
              </p>
              <p className="plan__description">{plan.description}</p>
              <ul className="plan__items">
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="plan__cta" href="#contato">
                Agendar {plan.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="section__shell footer__shell">
        <div>
          <p className="footer__logo">
            raquel<span>&apos;s</span> nails
          </p>
          <p className="footer__note">
            Elegância na ponta dos dedos, com hora marcada.
          </p>
        </div>

        <address className="footer__contact">
          <p>Rua das Acácias, 128 - Sala 4</p>
          <p>
            <a href="tel:+5511999998888">(11) 99999-8888</a>
          </p>
          <p>
            <a href="mailto:contato@raquelsnails.com.br">
              contato@raquelsnails.com.br
            </a>
          </p>
        </address>

        <div className="footer__hours">
          <p>Terça a sexta: 9h às 19h</p>
          <p>Sábado: 9h às 16h</p>
        </div>
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} Raquel&apos;s Nails. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
