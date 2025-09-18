import React from 'react';
import { Eye, Target, Heart } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const vmvItems = [
  {
    id: 'vision',
    icon: Eye,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'mission',
    icon: Target,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'values',
    icon: Heart,
    color: 'from-purple-500 to-pink-600',
  },
];

export const VisionMissionValues: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('vmv.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {vmvItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group hover:-translate-y-2"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={40} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t(`vmv.${item.id}.title`)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(`vmv.${item.id}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};