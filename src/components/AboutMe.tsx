import Section from './Section';

const AboutMe = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl space-y-6 text-foreground/75 leading-relaxed">
        <p>
          I've been building software since 2006. My first paid projects were web applications for the firefighters of the Moravian region, one of which is still running today, wrapped in Docker because nobody can replace it. That early start shaped a principle I still follow: build things that last.
        </p>
        <p>
          I'm a systems thinker by nature. I've never been the person who obsesses over a single detail in isolation. I care about how the pieces fit together, how a system evolves, and what breaks when it scales. That mindset took me through academic research in high-performance computing, distributed systems at industrial scale, and eventually into founding my own projects.
        </p>
        <p>
          More than two years ago, I started treating entrepreneurship as another framework worth learning, and learning the hard way. Going through a startup accelerator, validating ideas, and building Doqra from scratch opened my eyes in ways that pure engineering never could. It shifted how I think about why software exists, not just how it works. I'm convinced it made me a better engineer.
        </p>
        <p>
          I work primarily with Rust and Python. Outside of all that, I'm a husband and a father, which keeps everything in perspective.
        </p>
      </div>
    </Section>
  );
};

export default AboutMe;
