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
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/msurkovsky",
      link: "https://github.com/msurkovsky",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/msurkovsky",
      link: "https://linkedin.com/in/msurkovsky",
    },
    {
      icon: Globe,
      label: "Personal Blog",
      value: "blog.surkovsky.cz",
      link: "https://blog.surkovsky.cz",
      disabled: true,
      disabledReason: "Coming soon! First post in progress."
    }
  ];

  return (
    <Section id="contact" title="Contact" className="pb-32">
      <div className={cn(
        "max-w-2xl opacity-0",
        visible && "animate-fade-in"
      )}>
        <p className="text-foreground/50 mb-12">
          Interested in discussing a project or just want to connect? Feel free to reach out.
        </p>

        <div className="space-y-6">
          {contactItems.map((item, index) => {
            const isDisabled = 'disabled' in item && item.disabled;
            return (
              <div
                key={index}
                className={cn(
                  "group flex items-center gap-4 opacity-0",
                  isDisabled && "opacity-40",
                  visible && "animate-fade-in",
                  `animate-delay-${index * 200}`
                )}
              >
                <item.icon size={18} className={cn(
                  "shrink-0",
                  isDisabled ? "text-foreground/30" : "text-primary"
                )} />
                <div>
                  <p className="text-sm text-foreground/40">{item.label}</p>
                  {isDisabled ? (
                    <p className="text-foreground/40">
                      {item.value}
                      {'disabledReason' in item && (
                        <span className="text-xs italic ml-2">{item.disabledReason}</span>
                      )}
                    </p>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/75 hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className={cn(
        "mt-24 text-sm text-foreground/30 opacity-0",
        visible && "animate-fade-in animate-delay-800"
      )}>
        <p>&copy; {new Date().getFullYear()} Martin Šurkovský. All rights reserved.</p>
      </footer>
    </Section>
  );
};

export default Contact;
