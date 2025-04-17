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
      skills: ["Rust", "Python", "JavaScript/TypeScript", "React", "Node.js", "Java", "Kotlin", "C", "C++"]
    },
    {
      category: "Infrastructure & Systems",
      skills: ["Distributed Systems", "Cloud Architecture", "Containerization", "Microservices", "DevOps", "CI/CD"]
    },
    {
      category: "Specializations",
      skills: ["Distributed Computing", "High Performance Computing", "Data Visualization"]
    },
    {
      category: "Entrepreneurial Experience",
      skills: ["Startup Development", "Product Management", "Business Strategy", "Team Leadership", "Fundraising", "Market Analysis"]
    }
  ];
  
  const philosophies = [
    "Design for maintainability and readability first",
    "Test-driven development leads to more robust systems",
    "Simplicity is a feature, not a compromise",
    "Continuous learning and adaptation are essential",
    "Effective communication is as important as technical skill"
  ];
  
  return (
    <Section id="expertise" title="Technical Expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className={cn(
          "space-y-12 opacity-0",
          visible && "animate-fade-in"
        )}>
          <h3 className="text-2xl font-light">Technical Skills</h3>
          <div className="space-y-8">
            {expertiseAreas.map((area, index) => (
              <div key={index}>
                <h4 className="text-xl font-medium mb-4">{area.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={cn(
          "opacity-0",
          visible && "animate-fade-in animate-delay-400"
        )}>
          <h3 className="text-2xl font-light mb-8">Problem-Solving Philosophy</h3>
          <div className="bg-accent/30 p-8 rounded-lg">
            <ul className="space-y-6">
              {philosophies.map((philosophy, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-primary font-display text-xl">0{index + 1}</span>
                  <p className="text-foreground/80">{philosophy}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Expertise;
