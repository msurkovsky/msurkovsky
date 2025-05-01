
import { useState, useEffect } from 'react';
import Section from './Section';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tag: string;
}

const ProjectCard = ({ title, description, tag }: ProjectCardProps) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="inline-block px-3 py-1 text-sm rounded-full bg-[#14b8a6]/10 text-[#14b8a6]">
        {tag}
      </div>
    </div>
  );
};

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
  
  const projectsData = [
    {
      title: "Personal Website",
      description: "Building website project in Web and front-end stack.",
      tag: "Website"
    },
    {
      title: "Nomlify",
      description: "Passion for family as food development with Rust and Python.",
      tag: "Backend"
    },
    {
      title: "Doqra",
      description: "Creating a project for new real-estate transactions.",
      tag: "Product"
    }
  ];
  
  return (
    <Section id="projects" title="Projects" className="bg-gray-50 py-16">
      <div className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0",
        visible && "animate-fade-in"
      )}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tag={project.tag}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
