import './App.css';
import Hero from './sections/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Contact from './sections/Contact/Contact';
import Projects from './sections/Projects/Projects';
import About from './sections/About/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
