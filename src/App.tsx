import React from 'react';
import { createLanguageProvider } from './hooks/useLanguage.tsx';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { PDGWelcome } from './components/PDGWelcome';
import { VisionMissionValues } from './components/VisionMissionValues';
import { Services } from './components/Services';
import { About } from './components/About';
import { TrustBadges } from './components/TrustBadges';
import { Partners } from './components/Partners';
import { SuccessStories } from './components/SuccessStories';
import { Testimonials } from './components/Testimonials';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

const { LanguageProvider } = createLanguageProvider();

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSlider />
        <PDGWelcome />
        <VisionMissionValues />
        <Services />
        <About />
        <TrustBadges />
        <Partners />
        <SuccessStories />
        <Testimonials />
        <ContactModal />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;