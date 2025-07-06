import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Contact = () => {
  const { language } = useLanguage();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactContent = {
    en: {
      title: "Get in Touch",
      subtitle: "Ready to drive positive change together? Contact us today.",
      address: "687 Quartier Industrielle, Avenue Ruvyironza/Gikondo, Kicukiro, Kigali, Rwanda",
      email: "info.contact@tikkunolam-cg.com",
      phone: "📞 +25761853434",
      whatsapp: "📱 +23057865390",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        submit: "Send Message"
      }
    },
    fr: {
      title: "Contactez-Nous",
      subtitle: "Prêt à conduire un changement positif ensemble? Contactez-nous aujourd'hui.",
      address: "687 Quartier Industrielle, Avenue Ruvyironza/Gikondo, Kicukiro, Kigali, Rwanda",
      email: "info.contact@tikkunolam-cg.com",
      phone: "📞 +25761853434",
      whatsapp: "📱 +23057865390",
      form: {
        name: "Nom Complet",
        email: "Adresse Email",
        subject: "Sujet",
        message: "Message",
        submit: "Envoyer le Message"
      }
    }
  };

  const currentContent = contactContent[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20">
      {/* Title Section - Blue theme */}
      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4">
          <div ref={titleRef} className="text-center">
            <h1 className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-800 ${titleVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              {currentContent.title}
            </h1>
            <p className={`font-body text-lg text-white/80 max-w-2xl mx-auto transition-all duration-800 delay-200 ${titleVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              {currentContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Contact Content - White background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div ref={contactRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-8">
                {language === 'en' ? 'Contact Information' : 'Informations de Contact'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                      {language === 'en' ? 'Office Address' : 'Adresse du Bureau'}
                    </h3>
                    <p className="font-body text-text-primary/70">
                      {currentContent.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                      {language === 'en' ? 'Email Address' : 'Adresse Email'}
                    </h3>
                    <a
                      href={`mailto:${currentContent.email}`}
                      className="font-body text-secondary-500 hover:text-primary-500 transition-colors"
                    >
                      {currentContent.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                      {language === 'en' ? 'Phone' : 'Téléphone'}
                    </h3>
                    <a
                      href="tel:+25761853434"
                      className="font-body text-secondary-500 hover:text-primary-500 transition-colors"
                    >
                      {currentContent.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/23057865390"
                      className="font-body text-secondary-500 hover:text-primary-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {currentContent.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">
                    {language === 'en' ? 'Interactive Map Coming Soon' : 'Carte Interactive Bientôt Disponible'}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-6">
                {language === 'en' ? 'Send us a Message' : 'Envoyez-nous un Message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    {currentContent.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent bg-white text-text-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    {currentContent.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent bg-white text-text-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                    {currentContent.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent bg-white text-text-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    {currentContent.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent bg-white text-text-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group bg-secondary-500 hover:bg-primary-500">
                  <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  {currentContent.form.submit}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};