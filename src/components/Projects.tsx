
import { useState, useEffect } from 'react';
import Section from './Section';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  const projects = [
    {
      title: "Real-time Industrial Monitoring",
      description: "Designed and built a distributed system for real-time monitoring of industrial equipment across multiple facilities, processing over 1TB of data daily.",
      tags: ["Distributed Systems", "Real-time", "Data Processing"],
      // Placeholder image, you would replace this with an actual project image
      image: "bg-gradient-to-br from-accent to-secondary"
    },
    {
      title: "Predictive Maintenance ML Platform",
      description: "Created a machine learning platform for predictive maintenance that reduced equipment downtime by 37% for manufacturing clients.",
      tags: ["Machine Learning", "Python", "Cloud"],
      image: "bg-gradient-to-br from-accent to-primary/20"
    },
    {
      title: "Research Journal Publishing Platform",
      description: "Built an open-source platform for academic publishing that has been adopted by 12 research journals, streamlining the peer review process.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "bg-gradient-to-br from-secondary to-accent"
    }
  ];
  
  return (
    <Section id="projects" title="Selected Projects" fullWidth>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={cn(
              "group bg-background rounded-lg overflow-hidden subtle-shadow transition-all hover:shadow-lg opacity-0",
              visible && "animate-fade-in",
              `animate-delay-${index * 200}`
            )}
          >
            <div className={cn(
              "h-48 w-full", 
              project.image
            )} />
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <ExternalLink size={16} className="text-foreground/30 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-foreground/70 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-accent/50 text-accent-foreground rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
