
import React from 'react';
import Section from './Section';

const AboutMe = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      className="bg-charcoal text-white"
    >
      <div className="max-w-3xl mx-auto bg-black/20 p-6 rounded-lg border border-white/10">
        <p className="mb-4 text-lg">
          Building software that stands the test of time and scales effortlessly is my passion. I specialize in backend development with <span className="text-primary">Rust</span> and <span className="text-primary">Python</span>.
        </p>
        
        <div className="my-6 border-l-4 border-primary pl-4 py-2">
          <p className="mb-4">
            Beyond coding, I'm exploring entrepreneurship and building innovative solutions.
          </p>
        </div>
        
        <ul className="space-y-2 mb-4">
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            <p>Collaborative team player with strong problem-solving skills</p>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            <p>Family-oriented, with values that shape my work perspective</p>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default AboutMe;
