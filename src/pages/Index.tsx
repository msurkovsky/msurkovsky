
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import AboutMe from '@/components/AboutMe';
import Journey from '@/components/Journey';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Header />
      <AboutMe />
      <Journey />
      <Expertise />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
