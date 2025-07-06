import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import content from '../data/content.json';

export const Services = () => {
  const { language } = useLanguage();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const services = content.services[language];

  return (
    <div className="py-20">
      {/* Hero Section - Blue theme */}
      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4">
          <div ref={titleRef} className="text-center mb-16">
            <h1 className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-800 ${titleVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              {language === 'en' ? 'Our Services' : 'Nos Services'}
            </h1>
            <p className={`font-body text-lg text-white/80 max-w-3xl mx-auto transition-all duration-800 delay-200 ${titleVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              {language === 'en' 
                ? 'We offer comprehensive consulting services designed to drive sustainable change and positive impact across East Africa.'
                : 'Nous offrons des services de conseil complets conçus pour conduire un changement durable et un impact positif à travers l\'Afrique de l\'Est.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Services List - White background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div ref={servicesRef} className={`space-y-8 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {services.map((service, index) => (
              <Card key={index} className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                  <div className="flex-1">
                    <h2 className={`font-heading text-2xl md:text-3xl font-bold mb-4 ${index % 2 === 0 ? 'text-secondary-500' : 'text-primary-500'}`}>
                      {service.title}
                    </h2>
                    <p className="font-body text-text-primary leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link to="/contact">
                      <Button className="group transition-transform duration-300 hover:scale-105 bg-secondary-500 hover:bg-primary-500">
                        {language === 'en' ? 'Learn More' : 'En Savoir Plus'}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Process Section - Green theme */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'en' ? 'Our Process' : 'Notre Processus'}
            </h2>
            <p className="font-body text-lg text-white/80 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'We follow a structured approach to ensure successful project delivery and sustainable outcomes.'
                : 'Nous suivons une approche structurée pour assurer une livraison de projet réussie et des résultats durables.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                emoji: '🔍',
                title: language === 'en' ? 'Discovery' : 'Découverte',
                description: language === 'en' ? 'Understanding your challenges and objectives' : 'Comprendre vos défis et objectifs',
                color: 'secondary'
              },
              {
                emoji: '🤝',
                title: language === 'en' ? 'Co-creation' : 'Co-création',
                description: language === 'en' ? 'Collaborative solution design with stakeholders' : 'Conception collaborative de solutions avec les parties prenantes.',
                color: 'white'
              },
              {
                emoji: '🗺️',
                title: language === 'en' ? 'Strategy' : 'Stratégie',
                description: language === 'en' ? 'Developing tailored solutions and approaches' : 'Développer des solutions et approches sur mesure',
                color: 'secondary'
              },
              {
                emoji: '🚀',
                title: language === 'en' ? 'Implementation' : 'Mise en Œuvre',
                description: language === 'en' ? 'Executing the plan with precision and care' : 'Exécuter le plan avec précision et soin',
                color: 'white'
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${process.color === 'secondary' ? 'bg-secondary-500' : 'bg-white'} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110`}>
                  <span className="text-2xl">{process.emoji}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  {process.title}
                </h3>
                <p className="font-body text-white/80 text-sm">
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