
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
      description: "As a member of a Rockwell Automation team, I contributed to a project enabling the seamless mirroring of industrial controllers and devices to the cloud. This architecture facilitates data flow from industrial hardware to cloud environments with configurable service levels, offering a unified access point for client applications. The solution effectively addresses bandwidth constraints on industrial networks, enhancing scalability and performance.",
      tags: ["Cloud", "Microservices", "Rust", "Rest API", "gRPC", "Docker", "Kubernetes", "Cross-functional collaboration"]
    },
    {
      shortName: "Doqra",
      title: "Redefining Property Transactions with Transparency and Efficiency",
      description: "Doqra is my latest entrepreneurial venture, aimed at transforming property transactions for the digital age. This web application is designed to simplify the complex process of buying and selling properties by automating key tasks, ensuring deadlines are met, and enhancing transparency. Built in close collaboration with early adopters, Doqra leverages a modern tech stack to deliver a seamless and efficient experience for all stakeholders involved in real estate transactions.",
      tags: ["Web application", "Real estate", "Document management", "User authentication", "Transaction tracking", "React", "Node.js"],
    },
    {
      shortName: "Nomlify",
      title: "Your Personal Cookbook for Toddlers",
      description: "Nomlify was a passion project created to participate in a startup accelerator program. As the founder, I led the initiative, driving the concept and execution. Nomlify was envisioned as a mobile application to help parents manage their toddlers' meals by gathering recipes from various sources, customizing them, and discovering new meal ideas. The app aimed to assist with meal planning, shopping, and identifying potentially harmful ingredients. The proposed tech stack included Flutter for the frontend and a C# backend hosted on Azure.",
      tags: ["Mobile platform", "Flutter", "Azure", "Team Management", "Startup journey", "Product definition", "Market validation"],
      link: "https://nomlify.com"
    },
    {
      shortName: "Ruth",
      title: "Distributed Traffic Simulator",
      description: "As the lead developer and later team lead, I worked on Ruth, a distributed traffic simulator designed for high-performance computing (HPC) clusters. The project leveraged Python and Rust to combine performance with ease of use. Ruth utilized OpenStreetMap (OSM) data for realistic simulations and provided advanced visualizations to analyze traffic patterns and behaviors, enabling insights into complex traffic systems.",
      tags: ["Distributed computing", "HPC", "Traffic Simulation", "Python", "Rust", "OSM Maps", "Visualizations"],
      link: "https://github.com/IT4Innovations/ruth"
    },
    {
      shortName: "viaRodos",
      title: "Monitoring of Traffic Flows on Selected Roads in the Czech Republic",
      description: "I played a key role in modernizing viaRodos, a system designed to monitor real-time traffic conditions on selected roads in the Czech Republic. The project focused on migrating the software from legacy systems to modern technologies, ensuring long-term maintainability and usability. My contributions included redesigning the software architecture, optimizing performance, and integrating advanced features to address the evolving needs of end-users and stakeholders.",
      tags: ["Traffic monitoring", "Visualization", "C#", "PostgresSQL", "System Modernization", "Real-Time Systems"],
      link: "https://viarodos.cz"
    },
    {
      shortName: "Morpheus",
      title: "Visual analysis of message-passing applications",
      description: "Morpheus was developed as a proof-of-concept tool during my PhD research. It is designed to visualize the communication patterns of message-passing applications, offering valuable insights into their behavior and performance characteristics. The tool helps developers analyze and optimize their applications by providing detailed visual representations of communication flows and performance metrics. Built using C++, LLVM, and Python, Morpheus demonstrates the potential of combining advanced visualization techniques with performance analysis.",
      tags: ["Extraction Communication Model", "Performance Analysis", "Message-passing", "C++", "LLVM", "Python", "Docker", "Visualization"],
      link: "https://github.com/IT4Innovations/morpheus"
    },
  ];
  
  return (
    <Section id="projects" title="Selected Projects" fullWidth className="bg-gradient-to-b from-background to-accent/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={cn(
              "group rounded-lg overflow-hidden depth-shadow transition-all hover:-translate-y-1 hover:shadow-lg border border-border/40 opacity-0",
              visible && "animate-fade-in",
              `animate-delay-${index * 200}`
            )}
          >
            <div className={cn(
              "h-48 w-full bg-[#1A1A1A] flex items-center justify-center p-6 relative overflow-hidden"
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-3xl font-medium text-center text-white group-hover:text-secondary transition-colors duration-300">{project.shortName}</h3>
            </div>
            <div className="p-6 space-y-4 bg-background">
              <div className="flex justify-between items-start">
                <h4 className="text-xl font-medium">{project.title}</h4>
                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                ) : <div />}
              </div>
              <p className="text-foreground/70 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className={cn(
                      "px-2 py-1 rounded-md text-xs",
                      idx % 2 === 0 ? "bg-primary/10 text-primary" : "bg-secondary/20 text-secondary-foreground"
                    )}
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
