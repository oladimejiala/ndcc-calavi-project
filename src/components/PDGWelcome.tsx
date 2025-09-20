import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const PDGWelcome: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('pdg.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('pdg.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* PDG Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/PDG Mr Fiacke2.jpeg"
                alt="PDG NDC"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">10+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Années d'Expérience
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div>
            <Quote className="w-16 h-16 text-emerald-600 mb-6" />
            
            <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
              "{t('pdg.message')}"
            </blockquote>

            <div className="border-l-4 border-emerald-600 pl-6">
              <div className="font-bold text-xl text-gray-800 mb-2">
                {t('pdg.name')}
              </div>
              <div className="text-emerald-600 font-semibold text-lg">
                {t('pdg.position')}
              </div>
              <div className="text-gray-600 mt-2">
                New Deal Consulting Conseils
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};