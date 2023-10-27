import React from 'react'
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import Skill from './Components/Skills/Skill';
import Portfolio from './Components/Portfolio/Portfolio';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
const App = () => {
  return (
  <>
    <Header />
    <Home />
    <Skill />
    <Portfolio />
    <Education />
    <Contact />
    <Footer />
    
  </>
  
  )
}
export default App;