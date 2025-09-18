import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const testimonials = [
  {
    id: 1,
    name: 'Marie Kouassi',
    company: 'Directrice, Entreprise Kouassi & Fils',
    textFr: 'NDC nous a accompagnés dans notre restructuration fiscale. Leur expertise nous a permis d\'économiser 30% sur nos impôts tout en respectant la réglementation.',
    textEn: 'NDC helped us with our tax restructuring. Their expertise allowed us to save 30% on our taxes while complying with regulations.',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: 2,
    name: 'Jean-Baptiste Akpo',
    company: 'CEO, AgroTech Solutions',
    textFr: 'Service exceptionnel! L\'équipe de NDC a géré notre comptabilité avec professionnalisme et nous a conseillés pour notre expansion.',
    textEn: 'Exceptional service! The NDC team managed our accounting professionally and advised us for our expansion.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: 3,
    name: 'Fatima Diallo',
    company: 'Fondatrice, DialloCorp',
    textFr: 'Grâce à NDC, notre entreprise a pu se développer rapidement. Leur formation en management nous a été très bénéfique.',
    textEn: 'Thanks to NDC, our company was able to grow rapidly. Their management training was very beneficial to us.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <Quote className="w-16 h-16 text-emerald-600 mb-6" />
            
            <div className="mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`inline-block w-6 h-6 ${
                    i < testimonials[currentIndex].rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              "{language === 'fr' ? testimonials[currentIndex].textFr : testimonials[currentIndex].textEn}"
            </blockquote>

            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-bold text-lg text-gray-800">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-emerald-600 font-medium">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
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