import AboutMe from './components/Sections/AboutMe';
import Introduction from './components/Sections/Introduction';
import TechStack from './components/Sections/TechStack';
import Projects from './components/Sections/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Sections/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pb-20">
        <Introduction />
        <AboutMe />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
