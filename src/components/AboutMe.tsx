
import React from 'react';
import Section from './Section';

const AboutMe = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      className="bg-charcoal text-white"
    >
      <div className="max-w-3xl mx-auto">
        <p className="mb-4 text-lg">
          Building software that stands the test of time and scales effortlessly? That's my sweet spot. While I'm comfortable across the full stack, my passion lies in backend development, where <span className="text-primary font-medium">Rust</span> and <span className="text-secondary font-medium">Python</span> are my go-to tools.
        </p>
        <p className="mb-4">
          Beyond coding, I'm exploring entrepreneurship and using my technical skills to build innovative solutions.
        </p>
        <p className="mb-4">
          I thrive in collaborative teams, bringing strong research and problem-solving skills to every project.
        </p>
        <p>
          Family is my priority. Being a husband and parent shapes my perspective and reminds me what truly matters.
        </p>
      </div>
    </Section>
  );
};

export default AboutMe;
