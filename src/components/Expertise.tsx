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
      skills: ["Distributed Systems", "Cloud Architecture", "Containerization", "Microservices", "DevOps", "CI/CD", "Kubernetes", "gRPC"]
    },
    {
      category: "Specializations",
      skills: ["High Performance Computing", "Real-time Systems", "Data Visualization"]
    },
    {
      category: "Entrepreneurial",
      skills: ["Startup Development", "Product Thinking", "Team Leadership", "Customer Validation"]
    }
  ];

  return (
    <Section id="expertise" title="Technical Expertise">
      <div className={cn(
        "space-y-10 opacity-0",
        visible && "animate-fade-in"
      )}>
        {expertiseAreas.map((area, index) => (
          <div key={index}>
            <h3 className="text-sm uppercase tracking-widest text-foreground/40 mb-4">{area.category}</h3>
            <div className="flex flex-wrap gap-2">
              {area.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-sm text-foreground/70 border border-foreground/10 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Expertise;
