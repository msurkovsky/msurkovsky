
import { useState, useEffect } from 'react';
import Section from './Section';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
  
  return (
    <Section id="contact" title="Contact" className="bg-white py-16">
      <div className={cn(
        "max-w-xl mx-auto opacity-0",
        visible && "animate-fade-in"
      )}>
        <div className="space-y-4">
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
            />
            <textarea 
              placeholder="Message" 
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
            ></textarea>
          </div>
          
          <Button 
            className="w-full md:w-auto bg-[#FFB800] hover:bg-[#FFB800]/90 text-black font-medium rounded-md px-8 py-6 h-auto"
          >
            Send
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
