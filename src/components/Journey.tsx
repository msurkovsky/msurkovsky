
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
      period: "2012 - 2018",
      title: "Academic Research",
      at: "VSB - Technical University of Ostrava, Department of Computer Science",
      description: "Contributed into several research projects ...",
      icon: Book
    },
    {
      period: "2018 - 2023",
      title: "Academic Research",
      at: "VSB - Technical University of Ostrava, IT4Innovations - National Supercomputing Center",
      description: "Finished PhD, focused on traffic simulations, ....",
      icon: Book
    },
    {
      period: "2023 - Present",
      title: "Rockwell Automation",
      description: "Digital Platform - Shadow service; the layer between edge devices and cloud, ...",
      icon: Briefcase
    },
    {
      period: "2024",
      title: "Entrepreneurial Ventures",
      description: "Founded a technology startup, focusing on innovative applications of meal preparation in families with small children.",
      icon: Lightbulb
    },
    {
      period: "2025",
      title: "Entrepreneurial Ventures",
      description: "Founded a technology startup, focusing on ... real-estate transfers. ...",
      icon: Lightbulb
    },
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
