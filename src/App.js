import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import {School} from "./components"


function App() {
  return (
    <div className="App">

         <School></School>
      <Router>

        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
