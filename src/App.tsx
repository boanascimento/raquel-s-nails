import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { About, Footer, Gallery, Pricing } from './components/Sections';
import SocialLinks from './components/SocialLinks';
import './App.css';

function App() {
  return (
    <div className="app">
      <a className="app__skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Gallery />
        <Pricing />
      </main>

      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
