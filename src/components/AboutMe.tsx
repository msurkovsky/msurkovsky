
import React from 'react';
import Section from './Section';

const AboutMe = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      className="bg-charcoal text-white"
    >
      <div className="dark-card">
        <p className="mb-6">
          Building software that stands the test of time and scales effortlessly? That's my sweet spot. I learned the value of maintainable code early on, and that lesson still shapes how I approach every project. While I'm comfortable across the full stack, my passion lies in the backend, where <span className="yellow-highlight">Rust</span> and <span className="text-secondary font-medium">Python</span> are my go-to tools for crafting robust solutions.
        </p>
        <p className="mb-6">
          Beyond the code, I'm energized by the world of entrepreneurship. I'm actively exploring startup ideas and using my technical skills to build innovative solutions. This dual perspective helps me connect technical execution with strategic vision.
        </p>
        <p className="mb-6">
          Collaboration is key in my book. I thrive in team environments and bring a strong foundation in research and problem-solving to the table.
        </p>
        <p>
          On a personal note, family is my priority. Being a husband and parent shapes my perspective and reminds me what truly matters.
        </p>
      </div>
    </Section>
  );
};

export default AboutMe;
