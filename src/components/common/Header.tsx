import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import content from '../../data/content.json'; // Ensure this path is correct

// Helper function to get public URL for images
const getPublicAssetUrl = (relativePath: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${relativePath.startsWith('/') ? relativePath.substring(1) : relativePath}`;
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = content.navigation[language];
  // NEW: Get the dropdown items directly from the new `ourWorksDropdown` section
  const ourWorksDropdownItems = content.ourWorksDropdown[language];

  const mainNavItems = [
    { key: 'home', href: '/' },
    { key: 'about', 'href': '/about' },
    // Removed services from here as requested
  ];

  const otherNavItems = [
    { key: 'team', href: '/team' },
    { key: 'contact', href: '/contact' },
  ];

  // Dynamically check if any of the dropdown items are active
  const isAchievementActive = ourWorksDropdownItems.some(item => location.pathname === item.href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={getPublicAssetUrl(content.navigation.logo.src)}
              alt={content.navigation.logo.alt}
              className="h-16 md:h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`font-body text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                }`}
              >
                {navigation[item.key as keyof typeof navigation]}
              </Link>
            ))}

            {/* Our Achievements Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAchievementsOpen(true)}
              onMouseLeave={() => setIsAchievementsOpen(false)}
            >
              <button
                className={`font-body text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  isAchievementActive
                    ? 'text-primary-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                }`}
              >
                <span>{navigation.achievements}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAchievementsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isAchievementsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                  {/* Map over the new ourWorksDropdownItems from content.json */}
                  {ourWorksDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherNavItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`font-body text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                }`}
              >
                {navigation[item.key as keyof typeof navigation]}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              {mainNavItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-body text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                  }`}
                >
                  {navigation[item.key as keyof typeof navigation]}
                </Link>
              ))}

              {/* Mobile Achievements Section - Now dynamically renders from ourWorksDropdownItems */}
              <div className="border-l-2 border-primary-500 pl-4 ml-2">
                <p className="font-body text-xs font-semibold text-primary-500 mb-2 uppercase tracking-wide">
                  {navigation.achievements}
                </p>
                {ourWorksDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-body text-sm font-medium transition-colors duration-200 py-1 ${
                      location.pathname === item.href
                        ? 'text-primary-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {otherNavItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-body text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                  }`}
                >
                  {navigation[item.key as keyof typeof navigation]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};