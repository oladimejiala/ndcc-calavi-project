import React from 'react';
import { createLanguageProvider } from './hooks/useLanguage.tsx';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { Services } from './components/Services';
import { About } from './components/About';
import { TrustBadges } from './components/TrustBadges';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const { LanguageProvider } = createLanguageProvider();

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSlider />
        <Services />
        <About />
        <TrustBadges />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;