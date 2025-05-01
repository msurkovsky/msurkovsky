
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const profileImagePath = '/images/msurkovsky.png';
  
  return (
    <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 md:pt-0 bg-background">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className={cn(
            "space-y-6 opacity-0",
            visible && "animate-fade-in"
          )}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-foreground">
              Engineer<span className="text-[#14b8a6]">.</span> <br />
              Builder<span className="text-[#14b8a6]">.</span> <br />
              Founder<span className="text-[#14b8a6]">.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg my-6">
              On a mission to simplify the complex.
            </p>
            
            <div className="pt-4">
              <Button 
                onClick={scrollToContact}
                className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-black font-medium rounded-md px-6 py-6 h-auto"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className={cn(
            "mt-12 md:mt-0 opacity-0",
            visible && "animate-fade-in animate-delay-200"
          )}>
            <Avatar className="w-48 h-48 md:w-64 md:h-64">
              <AvatarImage src={profileImagePath} alt="Profile" className="object-cover" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-[#14b8a6] stroke-2 opacity-60">
          <path d="M10,100 Q50,50 100,100 T190,100" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
