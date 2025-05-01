
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
        <div>
          <h3 className="text-xl font-medium mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-medium mb-3">{area.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, idx) => (
                    <span key={idx} className="teal-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Problem-Solving Approach</h3>
          <div className="bg-charcoal p-6 rounded-lg text-white">
            <ul className="space-y-4">
              {philosophies.map((philosophy, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-medium">0{index + 1}.</span>
                  <p>{philosophy}</p>
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
