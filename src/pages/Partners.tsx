import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Helper function to get public URL for images
const getPublicAssetUrl = (relativePath: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${relativePath.startsWith('/') ? relativePath.substring(1) : relativePath}`;
};

export const Partners = () => {
  const { language } = useLanguage();
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  // Partner data: 'color' property now only dictates the outline color for alternation
  // Corrected logoSrc to use lowercase 'partners' for broader compatibility
  const partners = [
    { name: 'Centre Psychologique IZERE', logoSrc: '/partners/partner1.jpg', logoAlt: 'Centre Psychologique IZERE Logo', color: 'secondary' },
    { name: 'ANSS', logoSrc: '/partners/partner2.jpg', logoAlt: 'ANSS Logo', color: 'primary' },
    { name: 'Melbet', logoSrc: '/partners/partner3.jpg', logoAlt: 'Melbet Logo', color: 'secondary' },
    { name: 'Medica Mondiale', logoSrc: '/partners/partner4.jpg', logoAlt: 'Medica Mondiale Logo', color: 'primary' },
    { name: 'BBIN', logoSrc: '/partners/partner5.jpg', logoAlt: 'BBIN Logo', color: 'secondary' },
    { name: 'GIGAWAT Global', logoSrc: '/partners/partner6.jpg', logoAlt: 'GIGAWAT Global Logo', color: 'primary' },
    { name: 'Safe Inclusion', logoSrc: '/partners/partner7.jpg', logoAlt: 'Safe Inclusion Logo', color: 'secondary' },
    { name: 'Techno Serve', logoSrc: '/partners/partner8.jpg', logoAlt: 'Techno Serve Logo', color: 'primary' },
    { name: 'Enabel', logoSrc: '/partners/partner9.jpg', logoAlt: 'Enabel Logo', color: 'secondary' },
    { name: 'Impunity Watch', logoSrc: '/partners/partner10.jpg', logoAlt: 'Impunity Watch Logo', color: 'primary' },
    { name: 'Bancobu', logoSrc: '/partners/partner11.jpg', logoAlt: 'Bancobu Logo', color: 'secondary' },
    { name: 'REDSS', logoSrc: '/partners/partner12.jpg', logoAlt: 'REDSS Logo', color: 'primary' },
    { name: 'SAYGE partners', logoSrc: '/partners/partner13.jpg', logoAlt: 'SAYGE partners Logo', color: 'secondary' },
    { name: 'Unicef', logoSrc: '/partners/partner14.jpg', logoAlt: 'Unicef Logo', color: 'primary' },
    { name: 'UN information Center for Indian and Bhutan', logoSrc: '/partners/partner15.jpg', logoAlt: 'UN Information Center for Indian and Bhutan Logo', color: 'secondary' },
    { name: 'Once ancre Fund', logoSrc: '/partners/partner16.jpg', logoAlt: 'Once Ancre Fund Logo', color: 'primary' },
    { name: 'GOPA', logoSrc: '/partners/partner17.jpg', logoAlt: 'GOPA Logo', color: 'secondary' },
    { name: 'UPV', logoSrc: '/partners/partner18.jpg', logoAlt: 'UPV Logo', color: 'primary' },
    { name: 'Next Einstein Forum', logoSrc: '/partners/partner19.jpg', logoAlt: 'Next Einstein Forum Logo', color: 'secondary' },
    { name: 'Ministere de la Sante Publique', logoSrc: '/partners/partner20.jpg', logoAlt: 'Minisante Logo P19', color: 'primary' },
  ];

  return (
    <div className="py-20">

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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div ref={partnersRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`
                  group relative bg-white rounded-lg shadow-md
                  hover:shadow-lg transition-all duration-700 ease-out transform
                  ${partnersVisible
                    ? (index % 2 === 0 ? 'opacity-100 translate-x-0' : 'opacity-100 translate-x-0')
                    : (index % 2 === 0 ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full')
                  }
                  ${partnersVisible ? `delay-${index * 100}` : ''}
                  cursor-pointer hover:scale-105
                `}
              >
                <div className="text-center p-8 aspect-square flex flex-col items-center justify-center">
                  {/* Circle for partner logo: White background with alternating outlines */}
                  <div className={`
                      w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden
                      bg-white ring-2 ring-offset-2 transition-all duration-300 group-hover:scale-105
                      ${partner.color === 'secondary' ? 'ring-secondary-500' : 'ring-primary-500'}
                  `}>
                    <img
                      src={getPublicAssetUrl(partner.logoSrc)}
                      alt={partner.logoAlt}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <p className="text-sm font-medium text-text-primary">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Corrected line: was the source of the "Unterminated string constant" error */}
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