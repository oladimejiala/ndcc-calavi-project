import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const partners = [
  { name: 'Banque Atlantique', logo: 'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=Banque+Atlantique' },
  { name: 'Ecobank', logo: 'https://via.placeholder.com/150x80/FF6600/FFFFFF?text=Ecobank' },
  { name: 'BCEAO', logo: 'https://via.placeholder.com/150x80/006633/FFFFFF?text=BCEAO' },
  { name: 'Ministère Finances', logo: 'https://via.placeholder.com/150x80/CC0000/FFFFFF?text=Min+Finances' },
  { name: 'OHADA', logo: 'https://via.placeholder.com/150x80/9900CC/FFFFFF?text=OHADA' },
  { name: 'UEMOA', logo: 'https://via.placeholder.com/150x80/FF9900/FFFFFF?text=UEMOA' },
  { name: 'Chambre Commerce', logo: 'https://via.placeholder.com/150x80/0099CC/FFFFFF?text=CCI' },
  { name: 'CNSS', logo: 'https://via.placeholder.com/150x80/669900/FFFFFF?text=CNSS' },
  { name: 'DGI', logo: 'https://via.placeholder.com/150x80/CC6600/FFFFFF?text=DGI' },
  { name: 'RCCM', logo: 'https://via.placeholder.com/150x80/6600CC/FFFFFF?text=RCCM' },
];

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('partners.subtitle')}
          </p>
        </div>

        {/* Sliding Partners */}
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};