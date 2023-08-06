import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Checkout from './pages/Checkout/Checkout'
import CheckoutContextProvider from './contexts/CheckoutContext'
import ContactUs from './pages/ContactUs/ContactUs'


function App() {

  return (
    <BrowserRouter>
        <CheckoutContextProvider>
          <Header />

            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/details/:productId' element={<ProductDetails />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/contactus' element={<ContactUs />} />
            </Routes>

          <Footer />
        </CheckoutContextProvider>
    </BrowserRouter>
  )
}

export default App
