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
  
  type Paragraph = {
    text: string;
    style?: string; // Optional style for the paragraph
  };
  
  type JourneyItem = {
    period: string;
    title: string;
    at?: string;
    description?: string | Paragraph[]; // Can be a string or array of paragraphs
    bulletPoints?: string[];
    bulletTitle?: string;
    conclusion?: string | Paragraph[]; // Updated to match the same structure as description
    icon: typeof Book | typeof Briefcase | typeof Lightbulb;
  };
  
  const professionalJourney: JourneyItem[] = [
    {
      period: "Oct 2025 – Present",
      title: "Software Developer",
      at: "Paessler GmbH, Nürnberg, Germany",
      description: "Working on PRTG Core, contributing to system stability and development flow.",
      bulletPoints: [
        "Designed and implemented a backend-agnostic database schema comparison component",
        "Contributing to cross-component tasks and issue resolution across the codebase"
      ],
      icon: Briefcase
    },
    {
      period: "Jun 2023 – Sep 2025",
      title: "Senior Software Engineer",
      at: "Rockwell Automation, Prague",
      description: "Started with CIP stack implementation in Rust, then moved to Shadow Service — a suite of microservices mirroring industrial edge devices to the cloud.",
      bulletPoints: [
        "Implemented parts of the CIP stack in Rust, including OPC UA support for the CIP adapter",
        "Contributed to Shadow Service, an abstraction layer over Eclipse Ditto for industrial automation",
        "Helped deliver a stakeholder-facing end-to-end demo spanning edge runtime, cloud infrastructure, and UI",
        "Later contributed across component boundaries: API design, service boundaries, system state ownership",
        "Supported other engineers through pair programming, feasibility spikes, and technical guidance"
      ],
      icon: Briefcase
    },
    {
      period: "Jun 2018 – Mar 2023",
      title: "Researcher",
      at: "IT4Innovations – National Supercomputing Center, Ostrava",
      description: "Contributed to national and international research projects, translating complex scientific requirements into scalable software.",
      bulletPoints: [
        "Led development of Ruth, a traffic simulator with OpenStreetMap integration; supervised three students; presented at ISC and SC conferences",
        "Took over viaRODOS, a public traffic-monitoring system — updated legacy code, reconnected to new data services, introduced caching for reliable operation",
        "Owned the redesign of Caver for HPC, learning computational biology domain to define a scalable technical direction"
      ],
      icon: Book
    },
    {
      period: "Oct 2017 – May 2018",
      title: "Research Assistant",
      at: "IT4Innovations – National Supercomputing Center, Ostrava",
      description: "Optimized communication in a distributed Betweenness Centrality algorithm, applying ideas from my PhD research. The refined version was later used in the H2020 Antarex project.",
      icon: Book
    },
    {
      period: "Nov 2012 – May 2018",
      title: "Researcher",
      at: "VŠB – Technical University of Ostrava, Department of Computer Science",
      description: "Conducted research while pursuing my PhD, contributing to multiple software projects.",
      bulletPoints: [
        "Developed front-end components for Roslab, a human resource planning tool; took on lead developer role within a small team",
        "Owned the performance-analysis component in Kaira, a visual programming tool for HPC",
        "Contributed to Haydi, a framework for generating discrete structures, through design discussions and technical input"
      ],
      icon: Book
    }
  ];
  
  const entrepreneurialVentures: JourneyItem[] = [
    {
      period: "2025 - Present",
      title: "Founder",
      at: "Doqra",
      description: "Started as a small tool to help my wife track cases and deadlines in her real estate practice — so she could focus on expertise, not administration. Grew from there into a full platform for case lifecycle tracking and invoicing. Built heavily with AI-assisted development. Currently in daily use, preparing to open for early adopters.",
      icon: Lightbulb
    },
    {
      period: "2023 - 2024",
      title: "Founder",
      at: "Nomlify",
      description: "Developed concept for a specialized digital cookbook platform targeting parents of toddlers. Nomlify aimed to help parents identify and modify recipes with age-appropriate ingredients for young children.",
      bulletPoints: [
        "Participated in a startup accelerator program, refining our business concept through multiple pivots based on market feedback",
        "Worked through the early stages of ideation and validation, learning crucial product-market fit principles",
        "Gained hands-on experience with lean startup methodology and customer development processes",
        "Created landing page (nomlify.com) in Czech to test concept viability with potential users"
      ],
      bulletTitle: "Key Experiences:",
      conclusion: [
        {
          text: "Though we didn't reach the app development phase, this entrepreneurial journey was truly mind-shifting. The accelerator experience transformed my perspective on product development, revealing the complex interplay between technical innovation and market needs. These insights continue to influence my approach to software development and problem-solving in ways that traditional employment couldn't provide.",
          style: "text-foreground/70 italic text-sm"
        }
      ],
      icon: Lightbulb
    }
  ];
  
  const renderJourneyItem = (item: JourneyItem, index: number, totalItems: number) => {
    const renderParagraphs = (content: string | Paragraph[]) => {
      if (typeof content === 'string') {
        return <p className="text-foreground/80 mb-4">{content}</p>;
      } else if (Array.isArray(content)) {
        return content.map((paragraph, pIndex) => (
          <p 
            key={pIndex} 
            className={cn(
              "mb-4", 
              paragraph.style
            )}
          >
            {paragraph.text}
          </p>
        ));
      }
      return null;
    };
    
    return (
      <div 
        key={index} 
        className={cn(
          "grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4 md:gap-8",
          visible ? "animate-fade-in" : "",
          visible ? `animate-delay-${index * 200}` : ""
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
        <div className="rounded-md p-4 md:p-6 mb-6 border-l border-foreground/10">
          {item.description && renderParagraphs(item.description)}
          
          {item.bulletPoints && item.bulletPoints.length > 0 && (
            <div className="mt-2">
              {item.bulletTitle && (
                <h4 className="text-sm font-medium text-foreground/70 mb-2">{item.bulletTitle}</h4>
              )}
              <ul className="list-disc pl-5 space-y-1">
                {item.bulletPoints.map((point, i) => (
                  <li key={i} className="text-foreground/80 text-sm">{point}</li>
                ))}
              </ul>
            </div>
          )}
          
          {item.conclusion && (
            <div className="mt-4 pt-3 border-t border-border/50">
              {renderParagraphs(item.conclusion)}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <Section id="journey" title="Professional Journey">
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-8 mt-6">
          {professionalJourney.map((item, index) => renderJourneyItem(item, index, professionalJourney.length))}
        </div>
        
        <h3 className="text-2xl md:text-3xl mt-12 mb-6 font-light">Entrepreneurial Ventures</h3>
        <div className="section-divider" />
        
        <div className="space-y-8 mt-6">
          {entrepreneurialVentures.map((item, index) => renderJourneyItem(item, index + professionalJourney.length, entrepreneurialVentures.length))}
        </div>
      </div>
    </Section>
  );
};

export default Journey;
