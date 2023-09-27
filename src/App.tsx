import AboutMe from './components/AboutMe';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
const App = () => {
  return (
    <main className="font-body pb-20">
      <Introduction />
      <AboutMe />
      <TechStack />
      <Projects />
      <TechStack />
    </main>
  );
};

export default App;
