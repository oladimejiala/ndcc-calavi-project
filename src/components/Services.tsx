import React from 'react';
import { 
  Calculator, 
  Scale, 
  FileText, 
  TrendingUp, 
  Target, 
  GraduationCap,
  ArrowRight,
  Phone,
  X
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { serviceDetails } from '../data/serviceDetails';

const services = [
  {
    id: 'fiscal',
    icon: Calculator,
    color: 'from-emerald-500 to-blue-600',
  },
  {
    id: 'legal',
    icon: Scale,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'accounting',
    icon: FileText,
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'management',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'projects',
    icon: Target,
    color: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'training',
    icon: GraduationCap,
    color: 'from-violet-500 to-purple-600',
  },
];

export const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = React.useState<string | null>(null);

  const openContactModal = () => {
    const modal = document.getElementById('contact-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  const openServiceModal = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <>
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
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
                    onClick={openContactModal}
                    className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn text-sm`}
                  >
                    <span>{t('services.enquireNow')}</span>
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                  
                  <button
                    onClick={() => openServiceModal(service.id)}
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
        <div className="relative bg-gradient-to-r from-emerald-600 to-blue-800 rounded-2xl p-8 md:p-12 mt-16 text-center text-white overflow-hidden">
          <div className="absolute inset-0 rounded-2xl opacity-10" style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3182465/pexels-photo-3182465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à faire grandir votre entreprise?
          </h3>
          <p className="text-xl mb-8 text-emerald-100">
            Contactez-nous dès aujourd'hui pour une consultation gratuite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openContactModal}
              className="bg-white text-emerald-600 px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              {t('hero.cta2')}
            </button>
            <a
              href="tel:+22997706069"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg transition-colors font-semibold flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>{t('hero.phone')}</span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>

    {/* Service Modal */}
    {selectedService && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">
                {language === 'fr' 
                  ? serviceDetails[selectedService as keyof typeof serviceDetails].titleFr
                  : serviceDetails[selectedService as keyof typeof serviceDetails].titleEn
                }
              </h2>
              <button
                onClick={closeServiceModal}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {language === 'fr' 
                ? serviceDetails[selectedService as keyof typeof serviceDetails].descriptionFr
                : serviceDetails[selectedService as keyof typeof serviceDetails].descriptionEn
              }
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {language === 'fr' ? 'Nos Services Incluent:' : 'Our Services Include:'}
            </h3>
            
            <ul className="space-y-3 mb-8">
              {serviceDetails[selectedService as keyof typeof serviceDetails].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">
                    {language === 'fr' ? feature.fr : feature.en}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openContactModal}
                className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <span>{t('services.enquireNow')}</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={closeServiceModal}
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 px-6 py-3 rounded-lg transition-colors font-semibold"
              >
                {language === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};