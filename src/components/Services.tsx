import React from 'react';
import { 
  Calculator, 
  Scale, 
  FileText, 
  TrendingUp, 
  Target, 
  GraduationCap,
  ArrowRight,
  Phone
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const services = [
  {
    id: 'fiscal',
    icon: Calculator,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'legal',
    icon: Scale,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'accounting',
    icon: FileText,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'management',
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'projects',
    icon: Target,
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'training',
    icon: GraduationCap,
    color: 'from-indigo-500 to-indigo-600',
  },
];

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t(`services.${service.id}.title`)}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {t(`services.${service.id}.description`)}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={scrollToContact}
                    className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn text-sm`}
                  >
                    <span>{t('services.enquireNow')}</span>
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                  
                  <button
                    onClick={scrollToContact}
                    className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                  >
                    <span>{t('services.learnMore')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 mt-16 text-center text-white overflow-hidden">
          <div className="absolute inset-0 rounded-2xl opacity-10" style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à faire grandir votre entreprise?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous dès aujourd'hui pour une consultation gratuite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              {t('hero.cta2')}
            </button>
            <a
              href="tel:+22997706069"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>{t('hero.phone')}</span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};