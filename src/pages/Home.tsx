import { ArrowRight, Target, Users, Globe, TrendingUp, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { HeroSlider } from '../components/ui/HeroSlider';
import content from '../data/content.json';
import { useState, useEffect } from 'react'; // <--- ADD THIS LINE to import useState and useEffect

// --- Import your images from the public folder ---
// Assuming these are directly in your 'public' folder.
// If you used import variables for heroImages previously, stick to that.
// But based on your current code, you're using direct paths, so I'll adjust them to be correct for public folder.
const heroImage1 = '/Main globe.jpg'; // Correct path for public folder
const heroImage2 = '/Main globe dessin.jpg'; // Correct path for public folder
const heroImage3 = '/Run the world.jpg'; // Correct path for public folder
const ctaBackground = '/HeroWorks.jpg'; // Make sure this image is in your public folder too!

export const Home = () => {
  const { language } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const homeContent = content.home[language];

  // --- Quote State and Effect (grouped with other hooks) ---
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
    }, 3000); // 3 seconds latency
    return () => clearInterval(interval);
  }, [quotes.length]);

  // --- Hero Images (using the imported variables/correct paths) ---
  const heroImages = [
    heroImage1, // Use the variable from the top
    heroImage2, // Use the variable from the top
    heroImage3  // Use the variable from the top
  ];

  const features = [
    {
      icon: Target,
      title: language === 'en' ? 'Strategic Solutions' : 'Solutions Stratégiques',
      description: language === 'en'
        ? 'Tailored consulting services that address your specific challenges and objectives'
        : 'Services de conseil sur mesure qui répondent à vos défis et objectifs spécifiques',
      color: 'secondary' // Blue
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Regional Expertise' : 'expertise Régionale',
      description: language === 'en'
        ? 'Experienced professionals with deep knowledge of East Africa'
        : 'Professionnels expérimentés avec une connaissance approfondie de l\'Afrique de l\'Est',
      color: 'primary' // green
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? 'Sustainable Impact' : 'Impact Durable',
      description: language === 'en'
        ? 'Solutions designed for long-term positive change and sustainable development'
        : 'Solutions conçues pour un changement positif à long terme et un développement durable',
      color: 'secondary' // blue
    },
  ];

  return (
    <div>
      {/* Hero Section with Slider - Blue theme */}
      <HeroSlider images={heroImages}>
        <div ref={heroRef} className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className={`font-heading text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-800 ${heroVisible ? 'animate-slide-left' : ''}`}>
              {homeContent.headline}
            </h1>
            <p className={`font-body text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto transition-all duration-800 delay-200 ${heroVisible ? 'animate-slide-right' : ''}`}>
              {homeContent.subheadline}
            </p>
            <div className={`transition-all duration-800 delay-400 ${heroVisible ? 'animate-fade-in' : ''}`}>
              <Link to="/services">
                <Button size="lg" className="group bg-secondary-500 hover:bg-primary-500">
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
                ? 'We bring together local expertise and international standards to deliver exceptional results.'
                : 'Nous combinons l\'expertise locale et les normes internationales pour offrir des résultats exceptionnels.'
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
                  {quote[language]} {/* Corrected to use language property */}
                </p>
              ))}
            </div>
            <div className="mt-8"> {/* Added margin top to separate button from quotes */}
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};