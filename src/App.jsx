import {Navbar } from './components/Navbar'
import Home from './components/Home'
import './App.css'
import { Service } from './components/Service'
import Differentiator from './components/Differentiator'
import Federal from './components/Federal'

function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <Service/>
     <Differentiator/>
     <Federal/>
    </>
  )
}

export default App
