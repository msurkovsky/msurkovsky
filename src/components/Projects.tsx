
import { useState, useEffect } from 'react';
import Section from './Section';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { describe } from 'node:test';

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
      title: "Shadowing industrial controllers from edge to cloud",
      description: "As a member of a Rockwell Automation team, I contributed to a project enabling the seamless mirroring of industrial controllers and devices to the cloud. This architecture facilitates data flow from industrial hardware to cloud environments with configurable service levels, offering a unified access point for client applications. The solution effectively addresses bandwidth constraints on industrial networks, enhancing scalability and performance.",
      tags: ["Cloud", "Microservices", "Rust", "Rest API", "gRPC", "Docker", "Kubernetes", "Cross-functional collaboration"],
      image: "bg-gradient-to-br from-accent to-secondary"
    },
    {
      title: "Nomlify - Your personal cookbook for the toddlers.",
      description: "Nomlify was a passion project created to participate in a startup accelerator program. As the founder, I led the initiative, driving the concept and execution. Nomlify was envisioned as a mobile application to help parents manage their toddlers' meals by gathering recipes from various sources, customizing them, and discovering new meal ideas. The app aimed to assist with meal planning, shopping, and identifying potentially harmful ingredients. The proposed tech stack included Flutter for the frontend and a C# backend hosted on Azure.",
      tags: ["Mobile platform", "Flutter", "Azure", "Team Management", "Startup journey", "Product definition", "Market validation"],
      image: "bg-gradient-to-br from-accent to-secondary"
    },
    {
      title: "Ruth - Distributed Traffic Simulator",
      description: "As the lead developer and later team lead, I worked on Ruth, a distributed traffic simulator designed for high-performance computing (HPC) clusters. The project leveraged Python and Rust to combine performance with ease of use. Ruth utilized OpenStreetMap (OSM) data for realistic simulations and provided advanced visualizations to analyze traffic patterns and behaviors, enabling insights into complex traffic systems.",
      tags: ["Distributed computing", "HPC", "Traffic Simulation", "Python", "Rust", "OSM Maps", "Visualizations"],
      image: "bg-gradient-to-br from-accent to-secondary"
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
