import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'


function Footer() {
  //create state to control my Modal
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="footer-container">
      <p>Made with love by mimo</p>
      <Link to="/contactUs" onClick={()=>setIsOpen(true)}>Contact Us</Link>
    </div>
  )
}

export default Footer