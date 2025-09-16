import React from 'react';
import { Shield, Award, CheckCircle, Users } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const badges = [
  {
    icon: Shield,
    titleFr: 'Cabinet Agréé',
    titleEn: 'Certified Firm',
    descFr: 'Agréé par les autorités compétentes',
    descEn: 'Certified by competent authorities',
  },
  {
    icon: Award,
    titleFr: 'RCCM Enregistré',
    titleEn: 'RCCM Registered',
    descFr: 'RB/ABC/ 13A 364',
    descEn: 'RB/ABC/ 13A 364',
  },
  {
    icon: CheckCircle,
    titleFr: 'IFU Certifié',
    titleEn: 'IFU Certified',
    descFr: '1201300663402',
    descEn: '1201300663402',
  },
  {
    icon: Users,
    titleFr: 'Membre Professionnel',
    titleEn: 'Professional Member',
    descFr: 'Association des Experts-Comptables',
    descEn: 'Certified Accountants Association',
  },
];

export const TrustBadges: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('trust.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {language === 'fr' ? badge.titleFr : badge.titleEn}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'fr' ? badge.descFr : badge.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};