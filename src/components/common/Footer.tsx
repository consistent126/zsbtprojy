import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Moon, Sun, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language } = useLanguage();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TO</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Tikkun Olam</h3>
                <p className="text-sm text-gray-400">Consulting Group</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {language === 'en' 
                ? 'Driving sustainable change in East Africa through innovative consulting solutions.'
                : 'Conduire un changement durable en Afrique de l\'Est grâce à des solutions de conseil innovantes.'
              }
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-secondary-400">
              {language === 'en' ? 'Contact Information' : 'Informations de Contact'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  687 Quartier Industrielle, Avenue Ruvyironza/Gikondo, Kicukiro, Kigali, Rwanda
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <a
                  href="mailto:info.contact@tikkunolam-cg.com"
                  className="text-sm text-gray-400 hover:text-secondary-400 transition-colors"
                >
                  info.contact@tikkunolam-cg.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <a
                  href="tel:+25761853434"
                  className="text-sm text-gray-400 hover:text-secondary-400 transition-colors"
                >
                  📞 +25761853434
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <a
                  href="https://wa.me/23057865390"
                  className="text-sm text-gray-400 hover:text-secondary-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📱 +23057865390
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-secondary-400">
              {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/services" className="text-sm text-gray-400 hover:text-secondary-400 transition-colors">
                {language === 'en' ? 'Services' : 'Services'}
              </Link>
              <Link to="/team" className="text-sm text-gray-400 hover:text-secondary-400 transition-colors">
                {language === 'en' ? 'Team' : 'Équipe'}
              </Link>
              <Link to="/about" className="text-sm text-gray-400 hover:text-secondary-400 transition-colors">
                {language === 'en' ? 'About Us' : 'À Propos'}
              </Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-secondary-400 transition-colors">
                {language === 'en' ? 'Contact' : 'Contact'}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            © 2024 Tikkun Olam Consulting Group. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-secondary-500 hover:bg-primary-500 transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};