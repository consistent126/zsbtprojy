import { Award, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from '../components/ui/Card';
import content from '../data/content.json';

export const About = () => {
  const { language } = useLanguage();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  const aboutContent = content.about[language];

  const values = [
    {
      icon: Lightbulb,
      title: language === 'en' ? 'Innovation' : 'Innovation',
      description: language === 'en' 
        ? 'Bringing creative and innovative approaches to complex development challenges'
        : 'Apporter des approches créatives et innovantes aux défis complexes du développement',
      emoji: '📡',
      color: 'secondary'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Collaboration' : 'Collaboration',
      description: language === 'en'
        ? 'Building strong partnerships with clients, communities, and stakeholders'
        : 'Construire des partenariats solides avec les clients, les communautés et les parties prenantes',
      emoji: '🤝',
      color: 'primary'
    },
    {
      icon: Award,
      title: language === 'en' ? 'Excellence' : 'Excellence',
      description: language === 'en'
        ? 'Committed to delivering the highest quality solutions and exceeding expectations'
        : 'Engagés à fournir des solutions de la plus haute qualité et à dépasser les attentes',
      emoji: '⭐',
      color: 'secondary'
    },
  ];

  return (
    <div className="py-20">
      {/* About Section - Blue theme */}
      <section className="py-16 bg-secondary-500">
        <div ref={aboutRef} className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${aboutVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className={`font-heading text-4xl md:text-5xl font-bold text-white mb-8 transition-all duration-800 ${aboutVisible ? 'animate-slide-left' : ''}`}>
              {aboutContent.title}
            </h1>
            <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-800 delay-200 ${aboutVisible ? 'animate-slide-right' : ''}`}>
              <p className="font-body text-lg text-text-primary leading-relaxed">
                {aboutContent.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Values Section - Green theme */}
      <section className="py-20 bg-white">
        <div ref={valuesRef} className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-800 ${valuesVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
              {language === 'en' ? 'Our Core Values' : 'Nos Valeurs Fondamentales'}
            </h2>
            <p className="font-body text-lg text-black/80 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'These principles guide everything we do and shape how we work with our clients and communities.'
                : 'Ces principes guident tout ce que nous faisons et façonnent la façon dont nous travaillons avec nos clients et communautés.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`p-6 text-center h-full bg-white transition-all duration-800 ${
                  valuesVisible 
                    ? index === 0 
                      ? 'animate-slide-left' 
                      : index === 1 
                      ? 'animate-slide-up' 
                      : 'animate-slide-right'
                    : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className={`w-16 h-16 ${value.color === 'secondary' ? 'bg-secondary-500' : 'bg-primary-500'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{value.emoji}</span>
                </div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${value.color === 'secondary' ? 'text-secondary-500' : 'text-primary-500'}`}>
                  {value.title}
                </h3>
                <p className="font-body text-text-primary text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};