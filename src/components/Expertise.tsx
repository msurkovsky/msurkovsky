
import { useState, useEffect } from 'react';
import Section from './Section';
import { cn } from '@/lib/utils';

const Expertise = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    const element = document.getElementById('expertise');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  const expertiseAreas = [
    {
      category: "Languages & Frameworks",
      skills: ["Rust", "Python", "JavaScript/TypeScript", "React", "Node.js", "Java", "Kotlin"]
    },
    {
      category: "Infrastructure & Systems",
      skills: ["Distributed Systems", "Cloud Architecture", "Containerization", "Microservices"]
    },
    {
      category: "Entrepreneurial",
      skills: ["Startup Development", "Product Management", "Team Leadership", "Market Analysis"]
    }
  ];
  
  const philosophies = [
    "Design for maintainability first",
    "Test-driven development builds robust systems",
    "Simplicity is a feature",
    "Continuous learning is essential"
  ];
  
  return (
    <Section id="expertise" title="Technical Expertise" className="bg-background">
      <div className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8",
        visible && "animate-fade-in"
      )}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-6 text-charcoal border-b pb-2">Technical Skills</h3>
          <div className="space-y-4">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-medium mb-2 text-charcoal">{area.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, idx) => (
                    <span key={idx} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-charcoal p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-6 text-white border-b border-white/20 pb-2">Approach</h3>
          <ul className="space-y-4 text-white">
            {philosophies.map((philosophy, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold">{index + 1}</span>
                <p>{philosophy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Expertise;
