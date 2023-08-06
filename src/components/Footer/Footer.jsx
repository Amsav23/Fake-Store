import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'



function Footer() {
  //create state to control my Modal
  const [isOpen, setIsOpen] = React.useState(false)


  return (
    <div className="footer-container">
        Made with love by mimo
        <Link to="/contactus">
        <button className="contact-btn" onClick={()=>setIsOpen(true)}>Contact Us</button>
        </Link>


        

    </div>
  )
}

export default Footer