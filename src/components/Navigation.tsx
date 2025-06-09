'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're near the bottom of the page, highlight contact
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // For other sections, use a smaller threshold
      const scrollThreshold = windowHeight * 0.2; // 20% of viewport height
      let currentSection = sections[0].id;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionBottom = offsetTop + offsetHeight;
          
          // Special handling for contact section
          if (section.id === 'contact') {
            if (scrollPosition + scrollThreshold >= offsetTop) {
              currentSection = section.id;
            }
          } else {
            // Normal handling for other sections
            if (scrollPosition + scrollThreshold >= offsetTop && 
                scrollPosition + scrollThreshold <= sectionBottom) {
              currentSection = section.id;
              break;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of the navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white">SC</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-blue-400 bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 