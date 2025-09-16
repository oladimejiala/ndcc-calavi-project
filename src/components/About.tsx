import React from 'react';
import { Award, Users, Briefcase, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const stats = [
  { id: 'experience', value: '10+', icon: Award },
  { id: 'clients', value: '500+', icon: Users },
  { id: 'projects', value: '1000+', icon: Briefcase },
  { id: 'team', value: '15+', icon: Star },
];

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t('about.title')}
            </h2>
            <h3 className="text-2xl text-blue-600 font-semibold mb-6">
              {t('about.subtitle')}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.id} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {t(`about.${stat.id}`)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Screenshot 2025-09-16 174551.jpg"
                alt="NDC Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Clients Satisfaits
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600 font-medium">
                  Taux de Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};