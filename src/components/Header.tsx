
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);
  
  const scrollToJourney = () => {
    const element = document.getElementById('journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Simplified image path - remove BASE_URL handling since we're now using a custom domain
  const profileImagePath = '/images/msurkovsky.png';
  
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-0 bg-gradient-to-br from-background via-background to-accent/20">
      <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className={cn(
          "md:col-span-3 space-y-6 opacity-0",
          visible && "animate-fade-in"
        )}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            Engineer by background,<br/> founder by <span className="text-primary">passion</span>
          </h1>
          <p className="text-base md:text-xl text-foreground/80 max-w-lg">
            With over 20 years of experience spanning academic research, corporate software engineering, and entrepreneurial ventures.
          </p>
          <div className="pt-4">
            <div className="flex flex-col p-6 bg-[#1A1A1A] text-white rounded-lg depth-shadow">
              <p className="text-lg md:text-2xl italic text-white/90">
                "Fortune favors the prepared mind"
              </p>
              <div className="flex justify-end mt-2 max-w-md">
                <p className="text-sm md:text-lg text-secondary">
                  — Louis Pasteur
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "md:col-span-2 opacity-0",
          visible && "animate-fade-in animate-delay-400"
        )}>
          <div className="relative aspect-square max-w-sm mx-auto md:ml-auto md:mr-0 depth-shadow rounded-lg overflow-hidden border border-border/40">
            <Avatar className="w-full h-full">
              <AvatarImage src={profileImagePath} alt="Profile picture" className="object-cover" />
              <AvatarFallback className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-foreground/20 text-9xl font-display">
                MŠ
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToJourney}
        className={cn(
          "absolute bottom-12 opacity-0 hover:text-primary transition-colors",
          visible && "animate-fade-in animate-delay-800"
        )}
        aria-label="Scroll down"
      >
        <ArrowDown size={32} className="animate-bounce" />
      </button>
    </header>
  );
};

export default Header;
