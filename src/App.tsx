import AboutMe from './components/AboutMe';
import Introduction from './components/Introduction';
import TechStack from './components/TechStack';

const App = () => {
  return (
    <main className="font-sans pb-20">
      <Introduction />
      <AboutMe />
      <TechStack />
    </main>
  );
};

export default App;
