// src/components/Navbar.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For mobile menu icons
import { useLanguage } from '../hooks/useLanguage'; // Assuming this hook exists at this path
import { Button } from './ui/Button'; // Assuming Button component exists at this path
import content from '../data/content.json'; // To get navigation links and logo

// Helper function to get public URL for images
// This function assumes your public assets are served from the root of your domain.
const getPublicAssetUrl = (relativePath: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${relativePath.startsWith('/') ? relativePath.substring(1) : relativePath}`;
};

export const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get navigation links based on current language
  // We filter out 'logo' as it's not a navigation link itself
  const navLinks = Object.entries(content.navigation[language]).filter(([key]) => key !== 'logo');

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          {/* Use the logo from content.json */}
          <img
            src={getPublicAssetUrl(content.navigation.logo.src)}
            alt={content.navigation.logo.alt}
            className="h-10 w-auto" // Adjust size as needed. 'h-10' sets height, 'w-auto' maintains aspect ratio.
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(([key, value]) => (
            <a
              key={key}
              href={`#${key}`} // Assuming sections on your page have matching IDs (e.g., <section id="about">)
              className="font-body text-text-primary hover:text-primary-500 transition-colors duration-300"
            >
              {value}
            </a>
          ))}
          {/* Language Toggle Button */}
          <Button
            onClick={toggleLanguage}
            className="group bg-secondary-500 hover:bg-primary-500 text-white text-sm px-3 py-1 rounded-full"
          >
            {language === 'en' ? 'Français' : 'English'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-text-primary hover:text-primary-500"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white mt-2 border-t border-gray-200 py-2">
          <div className="flex flex-col space-y-2 px-4">
            {navLinks.map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="font-body text-text-primary hover:text-primary-500 block py-2"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {value}
              </a>
            ))}
            {/* Language Toggle Button for Mobile */}
            <Button
              onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
              className="group bg-secondary-500 hover:bg-primary-500 text-white text-sm px-3 py-1 rounded-full w-fit mt-4"
            >
              {language === 'en' ? 'Français' : 'English'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};