import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './components/Contact.js';
import Experience from './components/Experience.js';
import HomePage from './components/HomePage.js';
import NavBar from './components/NavBar.js';
import ParticlesBackground from './components/ParticlesBackground.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';

function App() {
  return (
    <div className="App">
        <ParticlesBackground id = "particles"/>
        <NavBar/>
        <HomePage/>
        <Experience/>
        <Skills />
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
