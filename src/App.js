import React, { useState } from 'react';
import './App.css';
// get all components here
import { Landing } from './Pages/Landing/Landing.js';
import { Hello } from './Pages/Hello/Hello.js';
import { Skills } from './Pages/Skills/Skills.js';
import { Projects } from './Pages/Projects/Projects.js';
import { Contact } from './Pages/Contact/Contact.js';

function App() {

  // theme state
  const [theme, setTheme] = useState('light');

  return (
    <div className={"App " + theme} data-aos-easing='ease' data-aos-delay='0'>

      <Landing
        theme={theme}
        setTheme={setTheme}
      />
      <Hello />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
