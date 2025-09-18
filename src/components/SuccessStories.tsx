import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Building, FileText } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const successStories = [
  {
    id: 1,
    titleFr: 'Acquisition de Titre Foncier',
    titleEn: 'Land Title Acquisition',
    descriptionFr: 'Accompagnement complet dans l\'acquisition de 50 titres fonciers pour nos clients, sécurisant leurs investissements immobiliers.',
    descriptionEn: 'Complete support in acquiring 50 land titles for our clients, securing their real estate investments.',
    icon: FileText,
    image: 'https://images.pexels.com/photos/3182465/pexels-photo-3182465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    stats: '50+ Titres',
  },
  {
    id: 2,
    titleFr: 'Restructuration Fiscale',
    titleEn: 'Tax Restructuring',
    descriptionFr: 'Optimisation fiscale pour une grande entreprise, permettant une économie de 30% sur les impôts annuels.',
    descriptionEn: 'Tax optimization for a large company, achieving 30% savings on annual taxes.',
    icon: Award,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    stats: '30% Économies',
  },
  {
    id: 3,
    titleFr: 'Création d\'Entreprises',
    titleEn: 'Business Creation',
    descriptionFr: 'Accompagnement dans la création et l\'immatriculation de plus de 200 entreprises au Bénin.',
    descriptionEn: 'Support in creating and registering over 200 businesses in Benin.',
    icon: Building,
    image: 'https://images.pexels.com/photos/3182700/pexels-photo-3182700.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    stats: '200+ Entreprises',
  },
];

export const SuccessStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('successStories.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('successStories.subtitle')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={successStories[currentIndex].image}
                  alt={language === 'fr' ? successStories[currentIndex].titleFr : successStories[currentIndex].titleEn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" />
                
                {/* Stats Badge */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold text-emerald-600">
                    {successStories[currentIndex].stats}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {React.createElement(successStories[currentIndex].icon, {
                    className: "w-12 h-12 text-emerald-600 mr-4"
                  })}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {language === 'fr' ? successStories[currentIndex].titleFr : successStories[currentIndex].titleEn}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {language === 'fr' ? successStories[currentIndex].descriptionFr : successStories[currentIndex].descriptionEn}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevStory}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-emerald-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};