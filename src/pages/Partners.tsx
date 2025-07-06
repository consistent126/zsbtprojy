import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Partners = () => {
  const { language } = useLanguage();
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  // Sample partner data - replace with actual partners
  const partners = [
    { name: '  Centre Psychologique IZERE', logo: 'P1', color: 'secondary' },
    { name: 'ANSS', logo: 'P2', color: 'primary' },
    { name: 'Melbet', logo: 'P3', color: 'secondary' },
    { name: 'Medica Mondiale', logo: 'P4', color: 'primary' },
    { name: 'BBIN', logo: 'P5', color: 'secondary' },
    { name: 'GIGAWAT Global', logo: 'P6', color: 'primary' },
    { name: 'Safe Inclusion', logo: 'P7', color: 'secondary' },
    { name: 'Techno Serve', logo: 'P8', color: 'primary' },
    { name: 'Enabel', logo: 'P9', color: 'primary' },
    { name: 'Impunity Watch', logo: 'P10', color: 'primary' },
    { name: 'Bancobu', logo: 'P11', color: 'primary' },
    { name: 'REDSS', logo: 'P12', color: 'primary' },
    { name: 'SAYGE parteners', logo: 'P13', color: 'primary' },
    { name: 'Unicef', logo: 'P14', color: 'primary' },
    { name: 'UN information Center for Indian and Bhutan', logo: 'P10', color: 'primary' },
    { name: 'Once ancre Fund', logo: 'P15', color: 'primary' },
    { name: 'GOPA', logo: 'P16', color: 'primary' },
    { name: 'UPV', logo: 'P17', color: 'primary' },
    { name: 'Next Einstein Forum', logo: 'P18', color: 'primary' },
    { name: 'UPV', logo: 'P19', color: 'primary' },
  ];

  return (
    <div className="py-20">
      {/* Title Section - Green theme */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4">
          <div ref={titleRef} className="text-center mb-16">
            <h1 className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-800 ${titleVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              {language === 'en' ? 'Our Partners' : 'Nos Partenaires'}
            </h1>
            <p className={`font-body text-lg text-white/80 max-w-3xl mx-auto transition-all duration-800 delay-200 ${titleVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              {language === 'en' 
                ? 'We collaborate with leading organizations, governments, and institutions to maximize our impact and deliver exceptional results.'
                : 'Nous collaborons avec des organisations, gouvernements et institutions de premier plan pour maximiser notre impact et offrir des résultats exceptionnels.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Partners Grid - White background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div ref={partnersRef} className={`transition-all duration-1000 ${partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Partners Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-8 flex items-center justify-center aspect-square"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 ${partner.color === 'secondary' ? 'bg-secondary-500' : 'bg-primary-500'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-lg">{partner.logo}</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium text-text-primary">
                        {partner.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Partnership Types - Blue theme */}
      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary-500 mb-4">
                {language === 'en' ? 'Government Agencies' : 'Agences Gouvernementales'}
              </h3>
              <p className="font-body text-text-primary text-sm">
                {language === 'en'
                  ? 'Collaborating with national and local government institutions to implement policy reforms and development programs.'
                  : 'Collaborer avec les institutions gouvernementales nationales et locales pour mettre en œuvre des réformes politiques et des programmes de développement.'
                }
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-500 mb-4">
                {language === 'en' ? 'International Organizations' : 'Organisations Internationales'}
              </h3>
              <p className="font-body text-text-primary text-sm">
                {language === 'en'
                  ? 'Working with UN agencies, development banks, and international NGOs on regional development initiatives.'
                  : 'Travailler avec les agences de l\'ONU, les banques de développement et les ONG internationales sur les initiatives de développement régional.'
                }
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary-500 mb-4">
                {language === 'en' ? 'Private Sector' : 'Secteur Privé'}
              </h3>
              <p className="font-body text-text-primary text-sm">
                {language === 'en'
                  ? 'Partnering with businesses and corporations to drive sustainable development and economic growth.'
                  : 'Partenariat avec les entreprises et les corporations pour conduire le développement durable et la croissance économique.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* CTA Section - Green theme */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'en' ? 'Become a Partner' : 'Devenir Partenaire'}
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Join us in creating lasting positive change across East Africa. Let\'s explore partnership opportunities.'
              : 'Rejoignez-nous pour créer un changement positif durable à travers l\'Afrique de l\'Est. Explorons les opportunités de partenariat.'
            }
          </p>
        </div>
      </section>
    </div>
  );
};