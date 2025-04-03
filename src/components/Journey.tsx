
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Book, Briefcase, Lightbulb } from 'lucide-react';
import Section from '@/components/Section';

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
  
  const professionalJourney = [
    {
      period: "2023 - Present",
      title: "Senior Software Engineer",
      at: "Rockwell Automation",
      description: "Initially contributed to the CIP Stack development using Rust. Following a team reorganization, I now work as part of a team building the Shadow Service - a suite of microservices that mirror selected industrial edge device functionality to the cloud. This architecture enables data flow from controllers and other industrial hardware to cloud environments at configurable service levels, providing a unified access point for client applications. This approach alleviates bandwidth constraints on industrial networks.",
      icon: Briefcase
    },
    {
      period: "2018 - 2023",
      title: "Researcher",
      at: "VSB - Technical University of Ostrava, IT4Innovations - National Supercomputing Center",
      description: "Finished PhD, focused on traffic simulations, ....",
      icon: Book
    },
    {
      period: "2012 - 2018",
      title: "Researcher",
      at: "VSB - Technical University of Ostrava, Department of Computer Science",
      description: "Contributed into several research projects ...",
      icon: Book
    }
  ];
  
  const entrepreneurialVentures = [
    {
      period: "2023 - 2024",
      title: "Co-Founder",
      at: "Nomlify",
      description: "Founded a technology startup, focusing on innovative applications of meal preparation in families with small children.",
      icon: Lightbulb
    },
    {
      period: "2025 - Present",
      title: "Co-Founder",
      at: "Real Estate Tech",
      description: "Founded a technology startup, focusing on ... real-estate transfers. ...",
      icon: Lightbulb
    }
  ];
  
  const renderJourneyItem = (item, index, totalItems) => (
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
        {item.at && (
          <span className="text-sm text-foreground/70 block mt-1 italic">
            {item.at}
          </span>
        )}
      </div>
      <div className="bg-background rounded-md p-6 subtle-shadow">
        <p className="text-foreground/80">{item.description}</p>
      </div>
    </div>
  );
  
  return (
    <section id="journey" className="section bg-accent/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-8 font-light">Professional Journey</h2>
        <div className="section-divider" />
        
        <div className="space-y-12 mt-12">
          {professionalJourney.map((item, index) => renderJourneyItem(item, index, professionalJourney.length))}
        </div>
        
        <h3 className="text-2xl md:text-3xl mt-16 mb-6 font-light">Entrepreneurial Ventures</h3>
        <div className="section-divider" />
        
        <div className="space-y-12 mt-12">
          {entrepreneurialVentures.map((item, index) => renderJourneyItem(item, index + professionalJourney.length, entrepreneurialVentures.length))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
