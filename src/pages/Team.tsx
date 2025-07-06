import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import content from '../data/content.json';

export const Team = () => {
  const { language } = useLanguage();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const teamMembers = [
    ...content.team,
    {
      name: "Henry Florian Ndihokubwayo",
      position: {
        en: "Senior Consultant",
        fr: "Consultant Senior"
      },
      bio: {
        en: "Strategic advisor with extensive experience in development programs and stakeholder engagement across East Africa.",
        fr: "Conseiller stratégique avec une vaste expérience dans les programmes de développement et l'engagement des parties prenantes en Afrique de l'Est."
      },
      linkedin: ""
    }
  ];

  const getCircleColor = (index: number) => {
    return index % 2 === 0 ? 'bg-secondary-500' : 'bg-primary-500';
  };

  return (
    <div className="py-20">
      {/* Hero Section - Green theme */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4">
          <div ref={titleRef} className="text-center mb-16">
            <h1 className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-800 ${titleVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              {language === 'en' ? 'Our Team' : 'Notre Équipe'}
            </h1>
            <p className={`font-body text-lg text-white/80 max-w-3xl mx-auto transition-all duration-800 delay-200 ${titleVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              {language === 'en' 
                ? 'Meet the dedicated professionals who drive our mission forward with expertise, passion, and commitment to sustainable change.'
                : 'Rencontrez les professionnels dévoués qui font avancer notre mission avec expertise, passion et engagement envers le changement durable.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Team Members - White background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div ref={teamRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center group">
                <div className="relative mb-6">
                  <div className={`w-32 h-32 mx-auto rounded-full ${getCircleColor(index)} flex items-center justify-center`}>
                    <div className="w-28 h-28 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                  {member.name}
                </h3>
                
                <p className={`font-body font-medium mb-4 ${index % 2 === 0 ? 'text-secondary-500' : 'text-primary-500'}`}>
                  {member.position[language]}
                </p>
                
                <p className="font-body text-text-primary/70 text-sm leading-relaxed mb-6">
                  {member.bio[language]}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <button
                    className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-colors ${index % 2 === 0 ? 'hover:bg-secondary-500' : 'hover:bg-primary-500'} hover:text-white`}
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button
                    className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-colors ${index % 2 === 0 ? 'hover:bg-secondary-500' : 'hover:bg-primary-500'} hover:text-white`}
                    aria-label="Email contact"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Contact Our Team Section - Blue theme */}
      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'en' ? 'Contact Our Team' : 'Contactez Notre Équipe'}
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Connect with our experts to discuss your project needs or partnership opportunities.'
              : 'Connectez-vous avec nos experts pour discuter de vos besoins de projet ou d\'opportunités de partenariat.'
            }
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <h3 className="font-heading text-xl font-semibold text-text-primary mb-4">
              {language === 'en' ? 'Get in Touch' : 'Entrer en Contact'}
            </h3>
            <p className="font-body text-text-primary/70 mb-4">
              {language === 'en'
                ? 'Ready to start your next project? We\'d love to hear from you.'
                : 'Prêt à commencer votre prochain projet? Nous aimerions avoir de vos nouvelles.'
              }
            </p>
            <a href="mailto:info.contact@tikkunolam-cg.com">
              <Button className="group bg-secondary-500 hover:bg-primary-500">
                <Mail className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Contact Us' : 'Contactez-Nous'}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};