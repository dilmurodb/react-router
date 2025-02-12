import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contacts';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Link className="link" to='/'>Home</Link>
      <Link className="link" to='/about'>About</Link>
      <Link className="link" to='/contacts'>Contacts</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
