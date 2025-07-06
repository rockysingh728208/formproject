import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
  <Navbar/>
  <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
  </Routes>
</div>
    </>
  )
}

export default App
