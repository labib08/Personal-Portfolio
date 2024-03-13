import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner.js';
import Contact from './components/Contact.js';
import Experience from './components/Experience.js';
import NavBar from './components/NavBar.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <Experience/>
        <Skills />
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
