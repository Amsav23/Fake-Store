import React from 'react'
import './Menu.css'

function Menu() {
  return (
    <div className="menu-container">
        <a href='/all'>All</a>
        <a href='/electronics'>Electronics</a>
        <a href='/jewelry'>Jewelery</a>
        <a href='/mensclothing'>Men's Clothing</a>
        <a href='/womensclothing'>Women's Clothing</a>
    </div>
  )
}

export default Menu