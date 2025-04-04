
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
      achievements: [],
      icon: Briefcase
    },
    {
      period: "2018 - 2023",
      title: "Researcher",
      at: "VSB - Technical University of Ostrava, IT4Innovations - National Supercomputing Center",
      description: "Contributed to multiple national and international research projects, specializing in translating complex scientific requirements into scalable software solutions across diverse domains.",
      achievements: [
        "Enhanced a traffic simulator's scalability for high-performance computing environments",
        "Modernized the viaRodos project, successfully migrating it from legacy systems to current technologies after the original maintainer's departure",
        "Led development of a deterministic traffic simulator, initially as the primary developer and later as technical lead for an expanded team",
        "Initiated modernization work on Caver, a protein analysis tool, quickly acquiring domain knowledge in computational biology to contribute to early design phases"
      ],
      icon: Book
    },
    {
      period: "2012 - 2018",
      title: "Researcher",
      at: "VSB - Technical University of Ostrava, Department of Computer Science",
      description: "Conducted research while pursuing my PhD, contributing to multiple software projects across various computing domains.",
      achievements: [
        "Contributed to the development of a visual programming tool designed to simplify access to high-performance computing resources",
        "Assisted in creating a framework for generating discrete structures from basic building blocks such as Cartesian products and mappings, with capabilities to enumerate all elements, all non-isomorphic structures, or generate random elements",
        "Participated in a complete rewrite of a hierarchical table visualization system using JavaScript canvas technology. Advanced to a lead position in my final years, overseeing development work and guiding junior co-workers"
      ],
      icon: Book
    }
  ];
  
  const entrepreneurialVentures = [
    {
      period: "2023 - 2024",
      title: "Co-Founder",
      at: "Nomlify",
      description: "Developed concept for a specialized digital cookbook platform targeting parents of toddlers. Nomlify aimed to help parents identify and modify recipes with age-appropriate ingredients for young children.",
      experiences: [
        "Participated in a startup accelerator program, refining our business concept through multiple pivots based on market feedback",
        "Worked through the early stages of ideation and validation, learning crucial product-market fit principles",
        "Gained hands-on experience with lean startup methodology and customer development processes",
        "Created initial website (nomlify.com) in Czech to test concept viability with potential users",
      ],
      conclusion: "Though we didn't reach the app development phase, this entrepreneurial journey was truly mind-shifting. The accelerator experience transformed my perspective on product development, revealing the complex interplay between technical innovation and market needs. These insights continue to influence my approach to software development and problem-solving in ways that traditional employment couldn't provide.RetryClaude can make mistakes. Please double-check responses.",
      icon: Lightbulb
    },
    {
      period: "2025 - Present",
      title: "Co-Founder",
      at: "Real Estate Tech",
      description: "Founded a technology startup, focusing on real-estate transfers.",
      achievements: [],
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
        <p className="text-foreground/80 mb-4">{item.description}</p>
        
        {item.achievements && item.achievements.length > 0 && (
          <div className="mt-2">
            <h4 className="text-sm font-medium text-foreground/70 mb-2">Key Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="text-foreground/80 text-sm">{achievement}</li>
              ))}
            </ul>
          </div>
        )}
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
