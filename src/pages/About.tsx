import { Award, Lightbulb, Users, BookOpen, RefreshCw } from 'lucide-react'; // NEW: Added BookOpen, RefreshCw
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from '../components/ui/Card';
import content from '../data/content.json';

export const About = () => {
  const { language } = useLanguage();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();

  const aboutContent = content.about[language];
  const newSectionsContent = content.about.new_sections[language];


  const values = [
    {
      icon: BookOpen, // Changed icon for Mutual Learning
      title: language === 'en' ? 'Mutual learning' : 'Apprentissage mutuel', // New title
      description: language === 'en'
        ? 'Fostering an environment where continuous knowledge exchange and shared growth are paramount.'
        : 'Favoriser un environnement où l\'échange continu de connaissances et la croissance partagée sont primordiaux.',
      color: 'secondary' // Kept color
    },
    {
      icon: RefreshCw, // Changed icon for Adaptation
      title: language === 'en' ? 'Adaptation' : 'Adaptation', // New title
      description: language === 'en'
        ? 'Embracing flexibility and responsiveness to evolve with dynamic challenges and opportunities.'
        : 'Adopter la flexibilité et la réactivité pour évoluer avec les défis et opportunités dynamiques.',
      color: 'primary' // Kept color
    },
    {
      icon: Lightbulb, // Changed icon for Creativity (Lightbulb fits well here)
      title: language === 'en' ? 'Creativity' : 'Créativité', // New title
      description: language === 'en'
        ? 'Cultivating original thought and imaginative solutions to unlock new possibilities.'
        : 'Cultiver la pensée originale et les solutions imaginatives pour débloquer de nouvelles possibilités.',
      color: 'secondary' // Kept color
    },
  ];

  return (
    <div className="py-20">
      {/* About Section - Hero Image */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image Div */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/CImgAbout.jpg')` }} 
        ></div>

        {/* Content Div - Make sure it's above the background */}
        <div ref={aboutRef} className="container mx-auto px-4 relative z-10">
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

      {/* NEW: Vision Section (like "WE ARE UMBRA") */}
      <section ref={visionRef} className={`py-16 md:py-24 bg-white transition-opacity duration-1000 ${visionVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Column: Text */}
          <div className={`text-center md:text-left p-8 md:p-12 bg-primary-500 rounded-lg shadow-lg ${visionVisible ? 'animate-slide-left' : ''}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {newSectionsContent.vision_title}
            </h2>
            <p className="font-body text-lg text-white leading-relaxed">
              {newSectionsContent.vision_content}
            </p>
          </div>
          {/* Right Column: Image */}
          <div className={`flex justify-center md:justify-end ${visionVisible ? 'animate-slide-right' : ''}`}>
            <img 
              src="/VisionAbout2.jpg" 
              alt={newSectionsContent.vision_title} 
              className="w-full max-w-sm md:max-w-md h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* NEW: Mission & Approach Section (like "WHY CHOOSE US") */}
      <section ref={missionRef} className={`py-16 md:py-24 bg-gray-50 transition-opacity duration-1000 ${missionVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Column: Image */}
          <div className={`flex justify-center md:justify-start order-2 md:order-1 ${missionVisible ? 'animate-slide-left' : ''}`}>
            <img 
              src="MissionAbout.jpg" 
              alt={newSectionsContent.mission_title} 
              className="w-full max-w-sm md:max-w-md h-auto rounded-lg shadow-xl"
            />
          </div>
          {/* Right Column: Text */}
          <div className={`text-center md:text-left order-1 md:order-2 p-8 md:p-12 bg-secondary-500 rounded-lg shadow-lg ${missionVisible ? 'animate-slide-right' : ''}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {newSectionsContent.mission_title}
            </h2>
            <p className="font-body text-lg text-white leading-relaxed">
              {newSectionsContent.mission_content}
            </p>
          </div>
        </div>
      </section>

      {/* White separator (kept as is) */}
      <div className="h-8 bg-white"></div>

      {/* Values Section (existing) */}
      <section className="py-20 bg-white">
        <div ref={valuesRef} className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-800 ${valuesVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
              {language === 'en' ? 'Our core values' : 'Nos valeurs fondamentales'}
            </h2>
            <p className="font-body text-lg text-black/80 max-w-2xl mx-auto">
              {language === 'en'
                ? 'When working with our clients, we prioritize space for mutual learning. The framework of our partnership can be adapted depending on the context and creativity is amply welcome.'
                : 'Dans nos collaborations avec les clients, nous accordons une place importante à l’apprentissage mutuel. Le cadre de notre partenariat est adaptable selon le contexte, et la créativité y est pleinement encouragée.'
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
                  {/* MODIFIED: Renders the Lucide icon component directly */}
                  <value.icon className="w-8 h-8 text-white" /> 
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