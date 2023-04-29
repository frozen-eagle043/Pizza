// import logo from '../logo.svg';
import '../App.css';
import PizzaListing from './PizzaListing';
import About from './About';
import Contact from './Contact';
//import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Routes >
        <Route exact path="/" element={<PizzaListing />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes >
      </Router>
    </div>
  );
}

export default App;
