import React from 'react';
import './Sections.css';
import lastWork1 from '../assets/last-work-nails-1.png';
import lastWork2 from '../assets/last-work-nails-2.png';
import lastWork3 from '../assets/last-work-nails-3.png';
import lastWork4 from '../assets/last-work-nails-4.png';
import lastWork5 from '../assets/last-work-nails-5.png';
import lastWork6 from '../assets/last-work-nails-6.png';

interface IPlans {
  name: string
  price: string
  description: string
  items: string[]
  featured: boolean
  linkToSchedule: string
}

interface IGalleryItem {
  name: string
  image: string
  alt: string
}

const GALLERY: IGalleryItem[] = [
  {
    name: 'Francesinha em blocos azuis',
    image: lastWork1,
    alt: 'Unhas ovais com francesinha diagonal em azul-marinho e azul claro',
  },
  {
    name: 'Esmaltação azul metalizada',
    image: lastWork2,
    alt: 'Unhas ovais curtas com esmaltação azul metalizada brilhante',
  },
  {
    name: 'Francesinha preta com corações',
    image: lastWork3,
    alt: 'Unhas nude com ponta preta, filete dourado e corações pretos',
  },
  {
    name: 'Nude marmorizado chocolate',
    image: lastWork4,
    alt: 'Unhas em tons de marrom chocolate com detalhes marmorizados em branco',
  },
  {
    name: 'Stiletto amarelo com flor 3D',
    image: lastWork5,
    alt: 'Unhas stiletto em degradê amarelo com flor em relevo e detalhes dourados',
  },
  {
    name: 'Francesinha lilás floral',
    image: lastWork6,
    alt: 'Unhas nude com ponta lilás, filete dourado e nail art floral',
  },
];

const PLANS: IPlans[] = [
  {
    name: 'Alongamento em gel + Nail Art simples',
    price: '90',
    description: 'Para uma estética mais arrojada.',
    items: ['Manicure completa', 'Alongamento em gel', 'Cutilagem suave'],
    featured: false,
    linkToSchedule: 'https://tuaagenda.app/c/RaquelsNails?startSchedule=true&profissionalID=beafa522-30ce-4d62-b744-1c4567b712ff&servicos=6e13f06a-6d7d-4f18-885f-3780c88d190b#flowSchedule/2'
  },
  {
    name: 'Nail Art Elaborada ou Emcapsulada',
    price: '10',
    description: 'O nosso serviço mais pedido.',
    items: [
      'Alongamento em fibra ou gel',
      'Esmaltação em gel',
      'Nail art em duas unhas',
      'Hidratação das cutículas',
    ],
    featured: false,
    linkToSchedule: 'https://tuaagenda.app/c/RaquelsNails?startSchedule=true&profissionalID=beafa522-30ce-4d62-b744-1c4567b712ff&servicos=6e13f06a-6d7d-4f18-885f-3780c88d190b#flowSchedule/2'
  },
  {
    name: 'Manutenção do alongamento em Gel',
    price: '80',
    description: 'Experiência completa, com hora marcada exclusiva.',
    items: [
      'Alongamento premium',
      'Nail art em todas as unhas',
      'Spa de mãos',
      'Retoque em 15 dias',
    ],
    featured: false,
    linkToSchedule: 'https://tuaagenda.app/c/RaquelsNails?startSchedule=true&profissionalID=beafa522-30ce-4d62-b744-1c4567b712ff&servicos=6e13f06a-6d7d-4f18-885f-3780c88d190b#flowSchedule/2'
  },
];

export function About() {
  return (
    <section className="section section--about" id="sobre">
      <div className="section__shell section__shell--split">
        <div>
          <p className="section__eyebrow">Sobre mim</p>
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
              <div className="gallery__thumb">
                <img
                  className="gallery__image"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
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
              <a className="plan__cta" href={plan.linkToSchedule} target='_blank'>
                Agendar serviço
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
            <a href="tel:+5581988815870">(81) 98881-5870</a>
          </p>
          <p>
            <a href="tel:+5581996477646">(81) 99647-7646</a>
          </p>
          <p>
            <a href="https://www.instagram.com/raquel.s.nails/" target='_blank'>
              @raquel.s.nails
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
