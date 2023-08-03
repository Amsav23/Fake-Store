import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header-container">
      <div>
        <Link to='/'>Fake Store</Link>
        <Link to='#'>Shopping Cart Icon</Link>
      </div>
      <div>
        <Link to='/favorites'>My Favorites</Link>
      </div>

    </div>
  )
}

export default Header