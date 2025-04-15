
import React from 'react';
import Section from './Section';
import { User2 } from 'lucide-react';

const AboutMe = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      className="bg-secondary/10"
    >
      <div className="space-y-6 text-foreground/90">
        <p>
          I'm a backend and cloud engineer with a strong foundation in distributed systems and infrastructure. My journey in software development has been driven by a passion for building efficient, scalable, and maintainable applications. While I've worked with various programming languages and technologies, I've recently been focusing on Rust and Python. I'm always eager to explore and learn new technologies, so I'm open to working with other programming languages as well.
        </p>
        <p>
          Beyond engineering, I'm deeply interested in entrepreneurship. I'm channeling my skills and experiences towards building innovative solutions and exploring startup opportunities. This dual focus allows me to bridge the gap between technical execution and business strategy.
        </p>
        <p>
          In my professional experience, I've excelled in collaborative team environments and am known for being a team player. I have a strong foundation in research and problem-solving skills, and I pride myself on my ability to dive deeply into challenges to develop innovative solutions.
        </p>
        <p>
          On a personal note, I'm happily married and a proud parent. While my spare time is limited, I cherish moments spent with my family and prioritize their needs above all else.
        </p>
      </div>
    </Section>
  );
};

export default AboutMe;
