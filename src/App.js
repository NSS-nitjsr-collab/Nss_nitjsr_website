import './App.css';
import Home from '../src/pages/Home'
import './style.css'
import {Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Event from './pages/Event';
import Team from './pages/Team';
import About from './pages/About';
import Yearbook from './pages/Yearbook';
import Error from './pages/Error';

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path="/yearbook" element={<Yearbook/>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
    
  )
}

export default App;
