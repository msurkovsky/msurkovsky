
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Book, Briefcase, Lightbulb } from 'lucide-react';

const Journey = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    const element = document.getElementById('journey');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  const journeyItems = [
    {
      period: "2003 - 2008",
      title: "Academic Research",
      description: "Conducted groundbreaking research in distributed systems and computational models, publishing papers in top-tier academic journals.",
      icon: Book
    },
    {
      period: "2008 - 2016",
      title: "Corporate Software Engineering",
      description: "Led development teams building scalable enterprise solutions across multiple industries, focusing on high-performance computing applications.",
      icon: Briefcase
    },
    {
      period: "2016 - Present",
      title: "Industrial Automation",
      description: "Architecting advanced industrial automation systems incorporating machine learning and real-time data processing.",
      icon: Briefcase
    },
    {
      period: "2012 - Present",
      title: "Entrepreneurial Ventures",
      description: "Founded and advised several technology startups, focusing on innovative applications of emerging technologies.",
      icon: Lightbulb
    }
  ];
  
  return (
    <section id="journey" className="section bg-accent/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-8 font-light">Professional Journey</h2>
        <div className="section-divider" />
        
        <div className="space-y-12 mt-12">
          {journeyItems.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-8 opacity-0",
                visible && "animate-fade-in",
                `animate-delay-${index * 200}`
              )}
            >
              <div>
                <span className="text-sm text-foreground/60 block mb-1">{item.period}</span>
                <div className="flex items-center gap-2 text-primary">
                  <item.icon size={16} />
                  <span className="font-medium">{item.title}</span>
                </div>
              </div>
              <div className="bg-background rounded-md p-6 subtle-shadow">
                <p className="text-foreground/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
