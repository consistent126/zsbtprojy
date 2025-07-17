import { Linkedin, Mail } from 'lucide-react';
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

export const Team = () => {
  const { language } = useLanguage();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  // Directly use the team data from content.json as it is now fully updated
  const teamMembers = content.team;

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
              {language === 'en' ? 'Our team' : 'Notre équipe'}
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
                  {member.image ? ( // Render image if path exists
                    <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden ${getCircleColor(index)} flex items-center justify-center`}>
                      <img
                        src={getPublicAssetUrl(member.image)}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full p-1" // 'p-1' to show the colored border
                      />
                    </div>
                  ) : ( // Fallback to initials if no image specified
                    <div className={`w-32 h-32 mx-auto rounded-full ${getCircleColor(index)} flex items-center justify-center`}>
                      <div className="w-28 h-28 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                  {member.name}
                </h3>

                <p className={`font-body font-medium mb-4 ${index % 2 === 0 ? 'text-secondary-500' : 'text-primary-500'}`}>
                  {member.position[language]}
                </p>

                {/* Individual LinkedIn button for each member */}
                {member.linkedin && ( // Only render button if linkedin URL exists
                  <div className="flex justify-center mt-4">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button className="group bg-secondary-500 hover:bg-primary-600 text-white"> {/* Blue button, white text */}
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </a>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Contact Our Team Section - Blue theme (now simplified with new text) */}
      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4 text-center">
          {/* Replaced all previous content with the single text */}
          <p className="font-body text-xl md:text-2xl text-white font-semibold max-w-4xl mx-auto">
            Tikkun Olam Consulting Group works with a network of experts worldwide and is open to collaborate with experienced professionals.
          </p>
        </div>
      </section>
    </div>
  );
};