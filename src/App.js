import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contacts';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
    try {
      const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/437133')
      const result = await response.json()
      setData(result)
      // console.log(data)
      if (!response.ok) throw Error('Did not receive expected data')
    } catch (err) {
      setErrorMsg(err.message)
      // console.log(errorMsg)
    } finally {
      setIsLoading(false)
    }
    }
    fetchItems()
  }, [])
  console.log(data
  )
  
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
