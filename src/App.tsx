import AboutMe from './components/Sections/AboutMe';
import Introduction from './components/Sections/Introduction';
import TechStack from './components/Sections/TechStack';
import Projects from './components/Sections/Projects';
import DesktopMenu from './components/Menu/DesktopMenu';

const App = () => {
  return (
    <>
      <DesktopMenu />
      <main className="pb-20">
        <Introduction />
        <AboutMe />
        <TechStack />
        <Projects />
      </main>
    </>
  );
};

export default App;
