
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
      value: "martin.surkovsky@gmail.com",
      link: "mailto:martin.surkovsky@gmail.com",
      disabled: false
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/msurkovsky",
      link: "https://github.com/msurkovsky",
      disabled: false
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/msurkovsky",
      link: "https://linkedin.com/in/msurkovsky",
      disabled: false
    },
    {
      icon: Globe,
      label: "Personal Blog",
      value: "blog.surkovsky.cz",
      link: "https://blog.surkovsky.cz",
      disabled: true, // Set to disabled
      disabledReason: "Coming soon! First post in progress."
    }
  ];
  
  return (
    <Section id="contact" title="Contact" className="bg-charcoal text-white pb-32">
      <div className={cn(
        "max-w-2xl mx-auto opacity-0",
        visible && "animate-fade-in"
      )}>
        <p className="text-center text-white/80 mb-12">
          Interested in discussing a project or just want to connect? Feel free to reach out through any of these channels.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-4 p-6 rounded-lg depth-shadow transition-all opacity-0 relative",
                !item.disabled && "hover:-translate-y-1 hover:shadow-lg",
                item.disabled && "cursor-not-allowed opacity-70",
                visible && "animate-fade-in",
                `animate-delay-${index * 200}`,
                item.disabled ? "bg-card/5 border border-white/5" : "bg-gradient-to-br from-card/10 to-card/5 border border-white/10"
              )}
              style={{ wordBreak: 'break-word' }}
            >
              <div className={cn(
                "shrink-0 p-2 rounded-full",
                item.disabled ? "bg-gray-700" : item.icon === Mail ? "bg-primary/20" : item.icon === Github ? "bg-secondary/20" : "bg-accent/20"
              )}>
                <item.icon size={20} className={item.disabled ? "text-gray-500" : item.icon === Mail ? "text-primary" : item.icon === Github ? "text-secondary" : "text-accent-foreground"} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-white/60">{item.label}</p>
                <p className={cn(
                  "text-white",
                  item.disabled && "text-gray-500"
                )}>
                  {item.value}
                </p>
                {item.disabled && item.disabledReason && (
                  <p className="text-xs text-gray-500 mt-1 italic">
                    {item.disabledReason}
                  </p>
                )}
              </div>
              
              {!item.disabled && (
                <a 
                  href={item.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 w-full h-full"
                  aria-label={`Visit ${item.label}`}
                >
                  <span className="sr-only">Visit {item.label}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <footer className={cn(
        "mt-24 text-center text-sm text-white/60 opacity-0",
        visible && "animate-fade-in animate-delay-800"
      )}>
        <p>© {new Date().getFullYear()} Martin Šurkovský. All rights reserved.</p>
      </footer>
    </Section>
  );
};

export default Contact;
