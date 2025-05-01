
import { useState, useEffect } from 'react';
import Section from './Section';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface Project {
  title: string;
  shortName: string;
  description: string;
  tags: string[];
  link?: string;
}

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
  
  const projects: Project[] = [
    {
      shortName: "Shadow Services",
      title: "Industrial Edge Devices to Cloud",
      description: "Enabling the seamless mirroring of industrial controllers and devices to the cloud. This architecture facilitates data flow from industrial hardware to cloud environments with configurable service levels.",
      tags: ["Cloud", "Microservices", "Rust", "Rest API"],
      link: ""
    },
    {
      shortName: "Doqra",
      title: "Property Transactions Platform",
      description: "Doqra aims at transforming property transactions for the digital age by automating key tasks, ensuring deadlines are met, and enhancing transparency in real estate transactions.",
      tags: ["Web application", "Real estate", "React", "Node.js"],
    },
    {
      shortName: "Nomlify",
      title: "Personal Cookbook for Toddlers",
      description: "A mobile application to help parents manage their toddlers' meals by gathering recipes from various sources, customizing them, and discovering new meal ideas.",
      tags: ["Mobile", "Flutter", "Azure", "Product definition"],
      link: "https://nomlify.com"
    }
  ];
  
  return (
    <Section id="projects" title="Selected Projects" className="bg-charcoal text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className={cn(
              "bg-black/20 border-white/10 text-white overflow-hidden",
              visible && "animate-fade-in",
              `animate-delay-${index * 200}`
            )}
          >
            <div className="p-6 border-b border-white/10">
              <h3 className="text-2xl text-primary mb-1">{project.shortName}</h3>
              <p className="text-sm text-white/70">{project.title}</p>
            </div>
            <CardContent className="p-6">
              <p className="text-sm text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="yellow-tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="mt-4 flex justify-end">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
