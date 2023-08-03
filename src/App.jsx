import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Electronics from './pages/Electronics/Electronics'
import Jewelery from './pages/Jewelery/Jewelery'
import MensClothing from './pages/MensClothing/MensClothing'
import WomensClothing from './pages/WomensClothing/WomensClothing'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Favorites from './pages/Favorites/Favorites'
import FavoritesContextProvider from './contexts/FavoritesContext'

function App() {


  return (
    <BrowserRouter>
      <FavoritesContextProvider>
        <Header />

        <Menu />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/jewelery' element={<Jewelery />} />
          <Route path='/mensclothing' element={<MensClothing />} />
          <Route path='/womensclothing' element={<WomensClothing />} />
          <Route path='/details/:productId' element={<ProductDetails />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>

          <Footer />
      </FavoritesContextProvider>
    </BrowserRouter>
  )
}

export default App
