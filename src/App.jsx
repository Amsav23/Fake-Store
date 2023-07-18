import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div>
      <Header />
      <Menu />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
