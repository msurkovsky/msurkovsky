
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Effect to prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Add a slight delay to allow menu to close before scrolling
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }
  };
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-24",
        scrolled ? "py-3 bg-background/90 backdrop-blur-md subtle-shadow" : "py-6"
      )}
    >
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <a href="#" className="text-lg font-display tracking-tight">Martin Šurkovsky</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {['journey', 'expertise', 'projects', 'contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item)}
              className="text-foreground/80 hover:text-foreground transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Redesigned Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden fixed inset-x-0 top-0 h-auto max-h-screen bg-card shadow-lg z-40 transition-all duration-300 ease-in-out",
        isOpen 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        <div className="pt-24 pb-8 px-6">
          <div className="flex flex-col items-center gap-6 p-4">
            {['journey', 'expertise', 'projects', 'contact'].map((item, index) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)}
                className={cn(
                  "w-full py-3 px-6 rounded-md text-center text-foreground/80 hover:text-foreground hover:bg-accent transition-all capitalize text-xl",
                  "transform transition-all duration-300",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  // Staggered animation delay for each menu item
                  isOpen && `transition-delay-${index * 75}ms`
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 75}ms` : '0ms'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
