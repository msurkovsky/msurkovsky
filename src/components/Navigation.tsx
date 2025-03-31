
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-24",
        scrolled ? "py-3 bg-background/80 backdrop-blur-md subtle-shadow" : "py-6"
      )}
    >
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <a href="#" className="text-lg font-display tracking-tight">John Doe</a>
        
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
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out pt-20",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center gap-8 p-6">
          {['journey', 'expertise', 'projects', 'contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item)}
              className="text-foreground/80 hover:text-foreground transition-colors text-xl capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
