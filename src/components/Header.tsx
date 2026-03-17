import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const profileImagePath = '/images/msurkovsky.png';

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-0">
      <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
        <div className={cn(
          "md:col-span-3 space-y-8 opacity-0",
          visible && "animate-fade-in"
        )}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            Engineer by background,<br/> founder by <span className="text-primary">passion</span>
          </h1>
          <p className="text-base md:text-xl text-foreground/60 max-w-lg">
            Two decades of building software — from research and high-performance computing to industrial platforms and startups.
          </p>
          <div className="pt-6">
            <p className="text-lg md:text-2xl italic text-foreground/50">
              "Fortune favors the prepared mind"
            </p>
            <p className="text-sm md:text-base text-primary/70 mt-2">
              — Louis Pasteur
            </p>
          </div>
        </div>

        <div className={cn(
          "md:col-span-2 opacity-0",
          visible && "animate-fade-in animate-delay-400"
        )}>
          <div className="relative max-w-sm mx-auto md:ml-auto md:mr-0">
            <div className="rotate-2 rounded-2xl overflow-hidden subtle-shadow aspect-[3/4]">
              <img
                src={profileImagePath}
                alt="Martin Šurkovský"
                className="w-full h-full object-cover object-[35%_top]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
