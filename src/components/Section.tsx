
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Section = ({ id, title, fullWidth = false, className, children, ...props }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn("py-16 px-6 md:px-12 lg:px-24", className)} 
      {...props}
    >
      <div className={cn("mx-auto", fullWidth ? "max-w-screen-2xl" : "max-w-screen-xl")}>
        <h2 className="text-4xl font-bold mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
