import React from 'react';
import {
  Scale,
  MessageSquare,
  Users,
  TrendingUp,
  Zap,
  Heart,
  BookOpen,
  Target,
  Search,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import content from '../data/content.json';

// Helper to map string icon names to Lucide components
const IconMap = {
  Scale,
  MessageSquare,
  Users,
  TrendingUp,
  Zap,
  Heart,
  BookOpen,
  Target,
  Search,
  Briefcase
};

export const AreasOfExpertise = () => {
  const { language } = useLanguage();
  // expertiseHeroRef and expertiseHeroVisible are removed as the hero section is gone
  // expertiseHeroContent is removed as the hero section content is gone

  // Create individual refs for each detailed expertise area
  const detailedExpertiseRefs = content.expertise.detailedAreas.map(() => useScrollAnimation());

  const detailedExpertiseAreas = content.expertise.detailedAreas;

  return (
    <div className="py-20">
      {/* The entire HERO SECTION block has been removed */}
      {/* The first White separator which followed the hero section has also been removed */}

      {/* NEW SECTION: Detailed Areas of Expertise with alternating layout (only these 6 areas) */}
      <section className="py-16 bg-background dark:bg-dark-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-black dark:text-white">
            {language === 'en' ? 'Our Areas of expertise' : 'Nos domaines d\'expertise'}
          </h2>
          {detailedExpertiseAreas.map((area, index) => {
            const IconComponent = IconMap[area.icon as keyof typeof IconMap];
            const { ref: currentRef, isVisible: currentVisible } = detailedExpertiseRefs[index];

            return (
              <div
                key={area.id}
                ref={currentRef}
                className={`relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 mb-24 last:mb-0 transition-all duration-1000 ${currentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                // Alternate layout: image on left (even index) or right (odd index)
                style={{ flexDirection: (index % 2 === 0) ? 'row' : 'row-reverse' }}
              >
                {/* Image Column - Alternating colors as framing */}
                <div
                  className={`flex justify-center items-center p-8 md:p-12 rounded-lg shadow-lg
                    ${(index % 2 === 0) ? 'md:order-1' : 'md:order-2'}
                    ${area.color === 'secondary' ? 'bg-secondary-500' : 'bg-primary-500'}`}
                >
                  <img
                    src={area.image}
                    alt={area.title[language]}
                    className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover"
                  />
                </div>

                {/* Text Content Column - White/Black background for text block */}
                <div
                  className={`p-8 md:p-12 rounded-lg shadow-lg bg-white dark:bg-black text-black dark:text-white transition-colors duration-300
                    ${(index % 2 === 0) ? 'md:order-2' : 'md:order-1'}`}
                >
                  <div className="text-center md:text-left">
                    <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                      {IconComponent && <IconComponent className="inline-block mr-3 w-8 h-8 align-text-bottom" />}
                      {area.title[language]}
                    </h3>
                    <div className="font-body text-lg leading-relaxed mb-8 max-h-96 overflow-y-auto custom-scrollbar">
                      {area.fullDescription[language]}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white dark:bg-dark-background"></div>

      {/* CTA Section - Green theme (Existing section) */}
      <section className="py-16 bg-primary-500 dark:bg-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'en' ? 'Need specialized expertise?' : 'Besoin d\'expertise Spécialisée?'}
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Our multidisciplinary team is ready to tackle your most complex challenges with innovative solutions.'
              : 'Notre équipe multidisciplinaire est prête à relever vos défis les plus complexes avec des solutions innovantes.'
            }
          </p>
        </div>
      </section>
    </div>
  );
};

/*
  Add this to your global CSS file (e.g., src/index.css or src/globals.css)
  if you want custom scrollbar styling:

.custom-scrollbar {
  scrollbar-width: thin; // For Firefox
  scrollbar-color: #888 #f1f1f1; // For Firefox
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
*/