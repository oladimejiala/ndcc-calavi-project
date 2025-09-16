import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    titleFr: 'Conseil Fiscal Expert',
    titleEn: 'Expert Tax Consulting',
    subtitleFr: 'Optimisez votre fiscalité avec nos experts certifiés',
    subtitleEn: 'Optimize your taxes with our certified experts',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    titleFr: 'Gestion d\'Entreprise',
    titleEn: 'Business Management',
    subtitleFr: 'Développez votre entreprise avec notre accompagnement',
    subtitleEn: 'Grow your business with our professional guidance',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    titleFr: 'Formation Professionnelle',
    titleEn: 'Professional Training',
    subtitleFr: 'Renforcez les compétences de vos équipes',
    subtitleEn: 'Strengthen your team\'s skills',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    titleFr: 'Solutions Juridiques',
    titleEn: 'Legal Solutions',
    subtitleFr: 'Sécurisez vos activités avec nos conseils juridiques',
    subtitleEn: 'Secure your business with our legal expertise',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    titleFr: 'Comptabilité Professionnelle',
    titleEn: 'Professional Accounting',
    subtitleFr: 'Gérez vos finances avec précision et conformité',
    subtitleEn: 'Manage your finances with precision and compliance',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60" />
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  {language === 'fr' ? slide.titleFr : slide.titleEn}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  {language === 'fr' ? slide.subtitleFr : slide.subtitleEn}
                </p>
                <p className="text-lg mb-12 text-blue-50 max-w-2xl">
                  {t('hero.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection('services')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>{t('hero.cta1')}</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                  
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    {t('hero.cta2')}
                  </button>
                  
                  <a
                    href="tel:+22997706069"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>{t('hero.phone')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};