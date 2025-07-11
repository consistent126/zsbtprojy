import { ArrowRight, Target, Users, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { HeroSlider } from '../components/ui/HeroSlider';
import content from '../data/content.json';
import { useState, useEffect } from 'react';


const heroImage1 = '/Main globe.jpg';
const heroImage2 = '/Main globe dessin.jpg';
const heroImage3 = '/Run the world.jpg';
const ctaBackground = '/HeroWorks.jpg';

export const Home = () => {
  const { language } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const homeContent = content.home[language];

  // --- Quote State and Effect (for sliding quotes at the bottom) ---
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    {
      en: "Turning ideas into action, action into impact and impact into lasting change. Together, we build a just world, a more human and enlightened world.",
      fr: "Transformer les idées en action, l'action en impact et l'impact en changement durable. Ensemble, nous bâtissons un monde juste, plus humain et éclairé."
    },
    {
      en: "With TOCG, voices are heard, ideas come to life and societies move toward greater justice and equity.",
      fr: "Avec TOCG, les voix sont entendues, les idées prennent vie et les sociétés avancent vers plus de justice et d'équité."
    },
    {
      en: "We don't just build strategies, we weave bridges between ideas, people and the future.",
      fr: "Nous ne nous contentons pas de bâtir des stratégies, nous tissons des ponts entre les idées, les personnes et l'avenir."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // 3 seconds latency for quotes
    return () => clearInterval(interval);
  }, [quotes.length]);


  // --- State and Effect for the Successive Hero Message Display (now looping through 2 texts) ---
  const [currentHeroTextIndex, setCurrentHeroTextIndex] = useState(0); // 0: subheadline, 1: delayedMessage

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cycle through 0, 1, then back to 0
      setCurrentHeroTextIndex(prevIndex => (prevIndex + 1) % 2); // Changed from % 3 to % 2
    }, 5000); // 5 seconds interval for each text
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  // --- Hero Images ---
  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage3
  ];

  const features = [
    {
      icon: Target,
      title: language === 'en' ? 'Strategic solutions' : 'Solutions stratégiques',
      description: language === 'en'
        ? 'Tailored consulting services that address your specific challenges and objectives'
        : 'Services de conseil sur mesure qui répondent à vos défis et objectifs spécifiques',
      color: 'secondary'
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Regional expertise' : 'Expertise régionale',
      description: language === 'en'
        ? 'Experienced professionals with deep knowledge of East Africa'
        : 'Professionnels expérimentés avec une connaissance approfondie de l\'Afrique de l\'Est',
      color: 'primary'
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? 'Sustainable impact' : 'Impact durable',
      description: language === 'en'
        ? 'Solutions designed for long-term positive change and sustainable development'
        : 'Solutions conçues pour un changement positif à long terme et un développement durable',
      color: 'secondary'
    }
  ];

  return (
    <div>
      {/* Hero Section with Slider - Blue theme */}
      <HeroSlider images={heroImages}>
        <div ref={heroRef} className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Headline: Adjust font size and margin for responsiveness */}
            <h1 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-12 transition-all duration-800 ${heroVisible ? 'animate-slide-left' : ''}`}>
              {homeContent.headline}
            </h1>

            {/* Container for the rotating messages: Adjust min-height and margin for responsiveness */}
            <div className="relative min-h-[100px] sm:min-h-[120px] md:min-h-[160px] flex items-center justify-center mb-36 sm:mb-20 md:mb-24">
              {/* First text: Original Subheadline */}
              <p className={`
                font-body text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center
                absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                transition-all duration-700 ease-in-out transform
                ${currentHeroTextIndex === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}
              `}>
                {homeContent.subheadline}
              </p>

              {/* Second text: Tikkun Olam definition */}
              <p className={`
                font-body text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center
                absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                transition-all duration-700 ease-in-out transform
                ${currentHeroTextIndex === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}
              `}>
                {homeContent.delayedMessage}
              </p>
            </div>

            {/* Button container */}
            <div className={`transition-all duration-800 delay-400 ${heroVisible ? 'animate-fade-in' : ''}`}>
              <Link to="/services">
                {/* Responsive Button sizing */}
                <Button
                  className="group bg-secondary-500 hover:bg-primary-500
                             px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl"
                >
                  {homeContent.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </HeroSlider>

      {/* White separator section */}
      <div className="h-8 bg-white dark:bg-gray-900"></div>

      {/* Features Section - Green theme */}
      <section className="py-20 bg-[#f5f5f5]">
        <div ref={featuresRef} className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
              {language === 'en' ? 'Why Choose Us' : 'Pourquoi Nous Choisir'}
            </h2>
            <p className="font-body text-lg text-black/80 max-w-2xl mx-auto">
              {language === 'en'
                ? 'We bring together expertise and international standards to deliver exceptional results.'
                : 'Nous combinons l\'expertise et les normes internationales pour offrir des résultats exceptionnels.'
              }
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center transition-all duration-1000 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center h-full group bg-white">
                <div className={`w-16 h-16 ${feature.color === 'secondary' ? 'bg-secondary-500' : 'bg-primary-500'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${feature.color === 'secondary' ? 'text-secondary-500' : 'text-primary-500'}`}>
                  {feature.title} {feature.title.includes('Expertise') && ''}
                </h3>
                <p className="font-body text-text-primary dark:text-white text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White separator section */}
      <div className="h-8 bg-white dark:bg-gray-900"></div>

      {/* CTA Section with blurred image background and sliding quotes */}
      <section
        className="py-20 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm"></div> {/* Overlay for blur and dim */}
        <div ref={ctaRef} className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${ctaVisible ? 'animate-parallax' : 'opacity-0'}`}>

            <div className="relative h-24 flex items-center justify-center overflow-hidden"> {/* Container for sliding quotes */}
              {quotes.map((quote, index) => (
                <p
                  key={index}
                  className={`font-body text-xl md:text-2xl text-white max-w-3xl mx-auto absolute transition-all duration-700 ease-in-out
                    ${index === currentQuoteIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  {quote[language]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};