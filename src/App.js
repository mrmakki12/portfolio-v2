import './App.css';
// get all components here
import { Landing } from './Pages/Landing/Landing.js';
import { Hello } from './Pages/Hello/Hello.js';
import { Skills } from './Pages/Skills/Skills.js';
import { Projects } from './Pages/Projects/Projects.js';
import { Contact } from './Pages/Contact/Contact.js';

function App() {
  return (
    <div className="App">

      <Landing />
      <Hello />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
