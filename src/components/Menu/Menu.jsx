import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div className="menu-container">
        <Link to='/'>All</Link>
        <Link to='/electronics'>Electronics</Link>
        <Link to='/jewelery'>Jewelery</Link>
        <Link to='/mensclothing'>Men's Clothing</Link>
        <Link to='/womensclothing'>Women's Clothing</Link>
    </div>
  )
}

export default Menu