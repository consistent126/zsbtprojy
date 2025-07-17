import { ArrowRight, Search, Users, Lightbulb, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import content from '../data/content.json';

// Helper function to get public URL for images
const getPublicAssetUrl = (relativePath: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${relativePath.startsWith('/') ? relativePath.substring(1) : relativePath}`;
};

export const Services = () => {
  const { language } = useLanguage();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  // This will now automatically get the services in the new order from content.json
  const servicesData = content.services[language];
  const servicesHeroImage = content.services.hero?.image;
  const servicesHeroAltText = content.services.hero?.altText[language];

  return (
    <div className="py-20">
      {/* Hero Section - White theme (formerly blue) */}
      <section className="py-16 bg-white relative overflow-hidden">
        <img
          src={getPublicAssetUrl(servicesHeroImage || '/heroservice.jpg')}
          alt={servicesHeroAltText || (language === 'en' ? 'Tikkun Olam Consulting Services' : 'Services de conseil Tikkun Olam')}
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div ref={titleRef} className="text-center mb-16">
            <h1 className={`font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6 transition-all duration-800 ${titleVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              {language === 'en' ? 'Our services' : 'Nos Services'}
            </h1>
            <p className={`font-body text-lg text-text-primary/80 max-w-3xl mx-auto transition-all duration-800 delay-200 ${titleVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              {language === 'en'
                ? 'We offer comprehensive consulting services designed to drive sustainable change and positive impact across East Africa.'
                : 'Nous offrons des services de conseil complets conçus pour conduire un changement durable et un impact positif à travers l\'Afrique de l\'Est.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* White separator - This div becomes redundant if both sections are white, but can be kept for consistent spacing logic */}
      <div className="h-8 bg-white"></div>

      {/* Services List - White background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div ref={servicesRef} className={`space-y-8 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {servicesData.map((service: any, index: number) => (
              <Card key={index} className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                  {/* Conditionally render image if 'image' property exists */}
                  {service.image && (
                    <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
                      <img
                        src={getPublicAssetUrl(service.image)}
                        alt={service.title}
                        className="rounded-lg shadow-lg w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className={`font-heading text-2xl md:text-3xl font-bold mb-4 ${index % 2 === 0 ? 'text-secondary-500' : 'text-primary-500'}`}>
                      {service.title}
                    </h2>
                    <p className="font-body text-text-primary leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {/* Removed the Link and Button for 'Get a Custom Quote' as requested */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White separator - This div is also redundant now */}
      <div className="h-8 bg-white"></div>

      {/* Process Section - White theme (formerly green) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {language === 'en' ? 'Our process' : 'Notre processus'}
            </h2>
            <p className="font-body text-lg text-text-primary/80 max-w-2xl mx-auto">
              {language === 'en'
                ? 'We follow a structured approach to ensure successful project delivery and sustainable outcomes.'
                : 'Nous suivons une approche structurée pour assurer une livraison de projet réussie et des résultats durables.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: language === 'en' ? 'Discovery' : 'Découverte',
                description: language === 'en' ? 'Understanding your challenges and objectives' : 'Comprendre vos défis et objectifs',
                color: 'secondary'
              },
              {
                icon: Users,
                title: language === 'en' ? 'Co-creation' : 'Co-création',
                description: language === 'en' ? 'Collaborative solution design with stakeholders' : 'Conception collaborative de solutions avec les parties prenantes.',
                color: 'white'
              },
              {
                icon: Lightbulb,
                title: language === 'en' ? 'Strategy' : 'Stratégie',
                description: language === 'en' ? 'Developing tailored solutions and approaches' : 'Développer des solutions et approches sur mesure',
                color: 'secondary'
              },
              {
                icon: Rocket,
                title: language === 'en' ? 'Implementation' : 'Mise en Œuvre',
                description: language === 'en' ? 'Executing the plan with precision and care' : 'Exécuter le plan avec précision et soin',
                color: 'white'
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${process.color === 'secondary' ? 'bg-secondary-500 text-white' : 'bg-white text-primary-500'} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110`}>
                  {<process.icon className="w-8 h-8" />}
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                  {process.title}
                </h3>
                <p className="font-body text-text-primary/80 text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};