import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import content from '../data/content.json';

export const Mission = () => {
  const { language } = useLanguage();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();

  const missionContent = content.mission[language];

  return (
    <div className="py-20">
      {/* Mission Statement - Green theme */}
      <section className="py-16 bg-primary-500">
        <div ref={missionRef} className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${missionVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className={`font-heading text-4xl md:text-5xl font-bold text-white mb-8 transition-all duration-800 ${missionVisible ? 'animate-slide-left' : ''}`}>
              {missionContent.title}
            </h1>
            <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-800 delay-200 ${missionVisible ? 'animate-slide-right' : ''}`}>
              <p className="font-body text-lg md:text-xl leading-relaxed text-text-primary">
                {missionContent.statement}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Values & Goals - Blue theme */}
      <section className="py-16 bg-secondary-500">
        <div ref={valuesRef} className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${valuesVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className={`font-heading text-3xl md:text-4xl font-bold text-white mb-8 text-center transition-all duration-800 ${valuesVisible ? 'animate-slide-down' : ''}`}>
              {missionContent.values.title}
            </h2>
            <div className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-800 delay-300 ${valuesVisible ? 'animate-slide-left' : ''}`}>
              <div className="space-y-6">
                {missionContent.values.items.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-4 transition-all duration-600 ${
                      valuesVisible ? 'animate-drop-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                    <p className="font-body text-text-primary leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Vision Section - Green theme */}
   <section className="py-16 bg-[#F5F5F5]">
        <div ref={visionRef} className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visionVisible ? 'opacity-100' : 'opacity-0'}`}>
         <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {language === 'en' ? 'Our Vision' : 'Notre Vision'}
            </h2>
   <div className="bg-primary-500/80 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-gray-900 text-lg md:text-xl font-medium leading-relaxed">
                {language === 'en' 
                  ? 'A prosperous East Africa where sustainable development, peace, and justice create lasting positive change for all communities.'
                  : 'Une Afrique de l\'Est prospère où le développement durable, la paix et la justice créent un changement positif durable pour toutes les communautés.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};