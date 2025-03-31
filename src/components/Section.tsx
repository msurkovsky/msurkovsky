
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  fullWidth?: boolean;
}

const Section = ({ 
  id, 
  title, 
  children, 
  className, 
  titleClassName,
  fullWidth = false
}: SectionProps) => {
  return (
    <section id={id} className={cn("section", className)}>
      <div className={fullWidth ? "w-full" : "max-w-5xl mx-auto"}>
        <h2 className={cn("text-3xl md:text-4xl mb-8 font-light", titleClassName)}>
          {title}
        </h2>
        <div className="section-divider" />
        {children}
      </div>
    </section>
  );
};

export default Section;
