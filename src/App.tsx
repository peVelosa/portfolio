import AboutMe from './components/AboutMe';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
const App = () => {
  return (
    <main className="pb-20 font-sans">
      <Introduction />
      <AboutMe />
      <TechStack />
      <Projects />
    </main>
  );
};

export default App;
