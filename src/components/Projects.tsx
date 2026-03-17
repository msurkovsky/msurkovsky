import { useState, useEffect } from 'react';
import Section from './Section';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

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
      title: "Shadowing Industrial Edge Devices to Cloud",
      description: "As a member of a Rockwell Automation team, I contributed to a project enabling the seamless mirroring of industrial controllers and devices to the cloud. This architecture facilitates data flow from industrial hardware to cloud environments with configurable service levels, offering a unified access point for client applications.",
      tags: ["Cloud", "Microservices", "Rust", "gRPC", "Docker", "Kubernetes"]
    },
    {
      shortName: "Doqra",
      title: "Redefining Property Transactions with Transparency and Efficiency",
      description: "My latest entrepreneurial venture, aimed at transforming property transactions for the digital age. This web application simplifies the complex process of buying and selling properties by automating key tasks, ensuring deadlines are met, and enhancing transparency.",
      tags: ["Web application", "Real estate", "React", "Node.js"],
    },
    {
      shortName: "Nomlify",
      title: "Your Personal Cookbook for Toddlers",
      description: "A passion project created to participate in a startup accelerator program. Nomlify was envisioned as a mobile application to help parents manage their toddlers' meals by gathering recipes, customizing them, and discovering new meal ideas.",
      tags: ["Mobile", "Flutter", "Azure", "Startup journey"],
      link: "https://nomlify.com"
    },
    {
      shortName: "Ruth",
      title: "Distributed Traffic Simulator",
      description: "As the lead developer and later team lead, I worked on Ruth, a distributed traffic simulator designed for high-performance computing clusters. The project leveraged Python and Rust, utilized OpenStreetMap data for realistic simulations, and provided advanced visualizations to analyze traffic patterns.",
      tags: ["HPC", "Python", "Rust", "Distributed computing"],
      link: "https://github.com/IT4Innovations/ruth"
    },
    {
      shortName: "viaRodos",
      title: "Monitoring of Traffic Flows in the Czech Republic",
      description: "I played a key role in modernizing viaRodos, a system designed to monitor real-time traffic conditions on selected roads in the Czech Republic. The project focused on migrating the software from legacy systems to modern technologies.",
      tags: ["Traffic monitoring", "C#", "PostgreSQL", "Real-time"],
      link: "https://viarodos.cz"
    },
    {
      shortName: "Morpheus",
      title: "Visual analysis of message-passing applications",
      description: "Developed as a proof-of-concept tool during my PhD research. Morpheus visualizes the communication patterns of message-passing applications, offering insights into their behavior and performance characteristics.",
      tags: ["C++", "LLVM", "Python", "Performance Analysis"],
      link: "https://github.com/IT4Innovations/morpheus"
    },
  ];

  return (
    <Section id="projects" title="Selected Projects" fullWidth>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "group opacity-0",
              visible && "animate-fade-in",
              `animate-delay-${Math.min(index * 200, 600)}`
            )}
          >
            <div className="flex items-baseline gap-3 mb-3">
              <h3 className="text-xl font-medium text-primary">{project.shortName}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/30 hover:text-primary transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
            <p className="text-sm text-foreground/40 mb-3">{project.title}</p>
            <p className="text-foreground/65 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs text-secondary/80 border border-secondary/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
