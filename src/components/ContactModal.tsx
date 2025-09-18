import React, { useState } from 'react';
import { Send, X, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const ContactModal: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mailtoLink = `mailto:ndcconseils.contacts@gmail.com?subject=Demande de renseignements - ${formData.service}&body=Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATéléphone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('contact-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  };

  return (
    <div id="contact-modal" className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 hidden">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-gray-600 mt-2">
                {t('contact.subtitle')}
              </p>
            </div>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Nos Informations</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t('contact.info.address')}</h4>
                    <p className="text-gray-600">Ilot 38 S « A » Sèmè Abomey - Calavi</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t('contact.info.phone')}</h4>
                    <p className="text-gray-600">+229 97 70 60 69</p>
                    <p className="text-gray-600">+229 95 80 71 78</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t('contact.info.email')}</h4>
                    <p className="text-gray-600">ndcconseils.contacts@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t('contact.info.hours')}</h4>
                    <p className="text-gray-600">{t('contact.info.hoursText')}</p>
                    <p className="text-gray-600">Sam: 8h00 - 12h00</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">{t('contact.info.location')}</h4>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8234567890123!2d2.3534819378023313!3d6.458864929844872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMzEuOSJOIDLCsDIxJzEyLjUiRQ!5e0!3m2!1sfr!2sbj!4v1234567890123"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.service')}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionner un service</option>
                    <option value="conseil-fiscal">Conseil Fiscal</option>
                    <option value="conseil-juridique">Conseil Juridique</option>
                    <option value="assistance-comptable">Assistance Comptable</option>
                    <option value="management">Management d'Entreprise</option>
                    <option value="gestion-projets">Gestion des Projets</option>
                    <option value="formation">Formation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>
                      {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                    </span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={closeModal}
                    className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 py-3 px-6 rounded-lg transition-colors font-semibold"
                  >
                    {t('contact.form.close')}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center font-medium">
                    {t('contact.form.success')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center font-medium">
                    {t('contact.form.error')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};