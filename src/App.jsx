import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Electronics from './pages/Electronics/Electronics'
import Jewelry from './pages/Jewelry/Jewelry'
import MensClothing from './pages/MensClothing/MensClothing'
import WomensClothing from './pages/WomensClothing/WomensClothing'
import ProductDetails from './pages/ProductDetails/ProductDetails'

function App() {


  return (
    <BrowserRouter>
      <Header />


      <Menu />


      <Routes>
        <Route path='/all' element={<Homepage />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/jewelry' element={<Jewelry />} />
        <Route path='/mensclothing' element={<MensClothing />} />
        <Route path='/womensclothing' element={<WomensClothing />} />
        <Route path='/details/:productId' element={<ProductDetails />} />
      </Routes>

      


      <Footer />
    </BrowserRouter>
  )
}

export default App
