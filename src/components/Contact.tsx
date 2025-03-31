
import { useState, useEffect } from 'react';
import Section from './Section';
import { cn } from '@/lib/utils';
import { Mail, Github, Linkedin, Globe } from 'lucide-react';

const Contact = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@johndoe.com",
      link: "mailto:contact@johndoe.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/johndoe",
      link: "https://github.com/johndoe"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/johndoe",
      link: "https://linkedin.com/in/johndoe"
    },
    {
      icon: Globe,
      label: "Personal Blog",
      value: "blog.johndoe.com",
      link: "https://blog.johndoe.com"
    }
  ];
  
  return (
    <Section id="contact" title="Contact" className="bg-accent/30 pb-32">
      <div className={cn(
        "max-w-lg mx-auto opacity-0",
        visible && "animate-fade-in"
      )}>
        <p className="text-center text-foreground/80 mb-12">
          Interested in discussing a project or just want to connect? Feel free to reach out through any of these channels.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactItems.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-4 p-4 bg-background rounded-lg subtle-shadow transition-all hover:shadow-md hover:-translate-y-1 opacity-0",
                visible && "animate-fade-in",
                `animate-delay-${index * 200}`
              )}
            >
              <div className="p-2 bg-accent/50 rounded-full">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">{item.label}</p>
                <p className="text-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <footer className={cn(
        "mt-24 text-center text-sm text-foreground/60 opacity-0",
        visible && "animate-fade-in animate-delay-800"
      )}>
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </Section>
  );
};

export default Contact;
