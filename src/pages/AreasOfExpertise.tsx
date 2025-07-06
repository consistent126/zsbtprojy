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
import { Card } from '../components/ui/Card';

export const AreasOfExpertise = () => {
  const { language } = useLanguage();
  const { ref: expertiseRef, isVisible: expertiseVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const expertiseAreas = [
    {
      icon: Scale,
      title: language === 'en' ? 'Access to Justice & Rule of Law' : 'Accès à la Justice et État de Droit',
      description: language === 'en' 
        ? 'Strengthening legal systems, promoting human rights, and improving access to justice for all citizens'
        : 'Renforcer les systèmes juridiques, promouvoir les droits de l\'homme et améliorer l\'accès à la justice pour tous les citoyens',
      color: 'secondary'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Programs related to Peacebuilding' : 'Programmes liés à la Consolidation de la Paix',
      description: language === 'en'
        ? 'Conflict resolution, reconciliation programs, and community-based peacebuilding initiatives'
        : 'Résolution de conflits, programmes de réconciliation et initiatives de consolidation de la paix communautaires',
      color: 'primary'
    },
    {
      icon: MessageSquare,
      title: language === 'en' ? 'Communication Strategies' : 'Stratégies de Communication',
      description: language === 'en'
        ? 'Strategic communication planning, public awareness campaigns, and stakeholder engagement'
        : 'Planification de communication stratégique, campagnes de sensibilisation du public et engagement des parties prenantes',
      color: 'secondary'
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? 'International Trade' : 'Commerce International',
      description: language === 'en'
        ? 'Trade policy development, market analysis, and export promotion strategies'
        : 'Développement de politiques commerciales, analyse de marché et stratégies de promotion des exportations',
      color: 'primary'
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Renewable Energy' : 'Énergies Renouvelables',
      description: language === 'en'
        ? 'Clean energy project development, policy frameworks, and sustainable energy solutions'
        : 'Développement de projets d\'énergie propre, cadres politiques et solutions énergétiques durables',
      color: 'secondary'
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Access to Health' : 'Accès à la Santé',
      description: language === 'en'
        ? 'Comprehensive health system analysis, healthcare accessibility programs, and community health initiative design'
        : 'Analyse complète du système de santé, programmes d\'accessibilité aux soins et conception d\'initiatives de santé communautaire',
      color: 'primary'
    },
    {
      icon: Search,
      title: language === 'en' ? 'Evaluation of Programs' : 'Évaluation de Programmes',
      description: language === 'en'
        ? 'Program evaluation, impact assessment, and monitoring & evaluation system design'
        : 'Évaluation de programmes, évaluation d\'impact et conception de systèmes de suivi et évaluation',
      color: 'secondary'
    },
    {
      icon: BookOpen,
      title: language === 'en' ? 'Research Studies' : 'Études de Recherche',
      description: language === 'en'
        ? 'Policy research, socio-economic studies, and evidence-based analysis'
        : 'Recherche politique, études socio-économiques et analyse basée sur des preuves',
      color: 'primary'
    },
    {
      icon: Target,
      title: language === 'en' ? 'Technical Assistance' : 'Assistance Technique',
      description: language === 'en'
        ? 'Capacity building, institutional strengthening, and technical advisory services'
        : 'Renforcement des capacités, renforcement institutionnel et services de conseil technique',
      color: 'secondary'
    },
    {
      icon: Briefcase,
      title: language === 'en' ? 'Program Management' : 'Gestion de Programmes',
      description: language === 'en'
        ? 'Project design, implementation management, and results-based monitoring'
        : 'Conception de projets, gestion de la mise en œuvre et suivi basé sur les résultats',
      color: 'primary'
    },
  ];

  return (
    <div className="py-20">
      {/* Title Section - Blue theme */}
      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4">
          <div ref={titleRef} className="text-center">
            <h1 className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-800 ${titleVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              {language === 'en' ? 'Areas of Expertise' : 'Domaines d\'Expertise'}
            </h1>
            <p className={`font-body text-lg text-white/80 max-w-3xl mx-auto transition-all duration-800 delay-200 ${titleVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              {language === 'en' 
                ? 'Our comprehensive expertise spans multiple sectors, enabling us to provide integrated solutions for complex development challenges across East Africa.'
                : 'Notre expertise complète couvre plusieurs secteurs, nous permettant de fournir des solutions intégrées pour les défis de développement complexes à travers l\'Afrique de l\'Est.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* White separator */}
      <div className="h-8 bg-white"></div>

      {/* Expertise Grid - White background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div ref={expertiseRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${expertiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="p-6 h-full group aspect-square flex flex-col justify-center">
                <div className="text-center">
                  <div className={`w-12 h-12 ${area.color === 'secondary' ? 'bg-secondary-500' : 'bg-primary-500'} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-heading text-lg font-semibold mb-3 ${area.color === 'secondary' ? 'text-secondary-500' : 'text-primary-500'}`}>
                    {area.title}
                  </h3>
                  <p className="font-body text-text-primary text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Card>
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
            {language === 'en' ? 'Need Specialized Expertise?' : 'Besoin d\'Expertise Spécialisée?'}
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