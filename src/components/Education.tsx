import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap } from 'lucide-react';
import Section from '@/components/Section';

const Education = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    const element = document.getElementById('education');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      period: "Oct 2012 – Jan 2020",
      degree: "Ph.D. in Computer Science",
      institution: "VŠB – Technical University of Ostrava",
      description: "Thesis: Extraction of abstract models of communications from message-passing applications. Developed Morpheus, a visualization tool for MPI communication patterns using Petri net-based MP-nets."
    },
    {
      period: "Oct 2009 – Jun 2012",
      degree: "Master's in Computer Science",
      institution: "VŠB – Technical University of Ostrava",
      description: "Developed Despr, a visual programming tool for designing stream-processing workflows."
    },
    {
      period: "Oct 2006 – Jun 2009",
      degree: "Bachelor's in Computer Science",
      institution: "VŠB – Technical University of Ostrava"
    }
  ];

  return (
    <Section id="education" title="Education">
      <div className="max-w-3xl space-y-8">
        {education.map((item, index) => (
          <div
            key={index}
            className={cn(
              "grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 opacity-0",
              visible && "animate-fade-in",
              `animate-delay-${index * 200}`
            )}
          >
            <div>
              <span className="text-sm text-foreground/60 block mb-1">{item.period}</span>
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap size={16} />
                <span className="font-medium text-sm">{item.degree}</span>
              </div>
            </div>
            <div className="border-l border-foreground/10 pl-4 md:pl-6">
              <p className="text-foreground/70 italic text-sm">{item.institution}</p>
              {item.description && (
                <p className="text-foreground/60 text-sm mt-2">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
