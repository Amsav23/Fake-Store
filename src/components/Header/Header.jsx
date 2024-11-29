import React, {useContext} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CheckoutContext } from '../../contexts/CheckoutContext'

function Header() {
  //shopping cart
  const {checkout} = useContext(CheckoutContext)
  console.log(checkout.length)

  return (
    <div className="header-container">
      <Link to='/' className='fake-store-link'>Fake Store</Link>

      <div className="icon-container">
        <Link to='/checkout'><AiOutlineShoppingCart className="shoppingCartIcon"/></Link>
        <p>{checkout.length}</p>
      </div>
    </div>
  )
}

export default Header