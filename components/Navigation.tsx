'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sun, Moon, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🐧</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Game Freedom
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('problem')} className="text-foreground hover:text-primary transition-colors">
              The Problem
            </button>
            <button onClick={() => scrollToSection('solution')} className="text-foreground hover:text-primary transition-colors">
              Solution
            </button>
            <button onClick={() => scrollToSection('targets')} className="text-foreground hover:text-primary transition-colors">
              Targets
            </button>
            <button onClick={() => scrollToSection('join')} className="text-foreground hover:text-primary transition-colors">
              How to Join
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <Button onClick={toggleDarkMode} variant="ghost" size="sm">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button onClick={toggleDarkMode} variant="ghost" size="sm">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              variant="ghost" 
              size="sm"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('problem')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                The Problem
              </button>
              <button onClick={() => scrollToSection('solution')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Solution
              </button>
              <button onClick={() => scrollToSection('targets')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Targets
              </button>
              <button onClick={() => scrollToSection('join')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                How to Join
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                FAQ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}