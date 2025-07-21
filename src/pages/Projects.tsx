import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import content from '../data/content.json';

export const Projects = () => {
  const { language } = useLanguage();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const projectsContent = content.projects[language];

  const getSectorColor = (index: number) => {
    return index % 2 === 0 ? 'secondary' : 'primary';
  };

  return (
    <div className="py-20">
      {/* Hero Section - Green theme */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4">
          <div ref={titleRef} className="text-center mb-16">
            <h1 className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-800 ${titleVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              {projectsContent.title}
            </h1>
            <p className={`font-body text-lg text-white/80 max-w-3xl mx-auto transition-all duration-800 delay-200 ${titleVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              {projectsContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Projects Overview - White background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="font-body text-lg text-text-primary leading-relaxed">
              {projectsContent.content}
            </p>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Featured Projects - Blue theme */}
      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'en' ? 'Featured projects' : 'Projets phares'}
            </h2>
            <p className="font-body text-lg text-white/80 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Highlighting some of our most impactful initiatives across East Africa.'
                : 'Mise en avant de certaines de nos initiatives les plus impactantes à travers l\'Afrique de l\'Est.'
              }
            </p>
          </div>

          <div ref={projectsRef} className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {projectsContent.featured.map((project, index) => {
              // Directly use project.videoUrl if it exists
              const youtubeUrl = project.videoUrl || null;

              return (
                <Card key={index} className="p-8 h-full bg-white">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        getSectorColor(index) === 'secondary'
                          ? 'bg-secondary-100 text-secondary-700'
                          : 'bg-primary-100 text-primary-700'
                      }`}>
                        <Tag className="w-3 h-3 inline mr-1" />
                        {project.sector}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>

                    <h3 className={`font-heading text-xl font-bold mb-3 ${
                      getSectorColor(index) === 'secondary' ? 'text-secondary-500' : 'text-primary-500'
                    }`}>
                      {project.title}
                    </h3>

                    <p className="font-body text-text-primary leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Conditionally render the YouTube button if videoUrl exists */}
                    {youtubeUrl && (
                      <div className="mt-6"> {/* Add some top margin */}
                        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="group bg-red-600 text-white hover:bg-red-700">
                            {language === 'en' ? 'Watch on youTube' : 'Voir sur youTube'}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Project Stats - White background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center justify-items-center">
            {[
              {
                number: '50+',
                label: language === 'en' ? 'Projects completed' : 'Projets réalisés',
                color: 'secondary'
              },
              {
                number: '10+',
                label: language === 'en' ? 'Years of experience' : 'Années d\'expérience',
                color: 'primary'
              },
              {
                number: '15+',
                label: language === 'en' ? 'Partners' : 'Partenaires',
                color: 'secondary'
              },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`w-20 h-20 ${stat.color === 'secondary' ? 'bg-secondary-500' : 'bg-primary-500'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-bold text-white">{stat.number}</span>
                </div>
                <p className="font-body text-text-primary font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* CTA Section - Green theme */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'en' ? 'Start your project' : 'Commencez votre projet'}
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Ready to make a positive impact? Let\'s discuss how we can help bring your vision to life.'
              : 'Prêt à avoir un impact positif? Discutons de la façon dont nous pouvons aider à concrétiser votre vision.'
            }
          </p>
          <Link to="/contact">
            <Button className="group bg-secondary-500 text-white hover:bg-secondary-600">
              {language === 'en' ? 'Contact us today' : 'Contactez-nous aujourd\'hui'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};