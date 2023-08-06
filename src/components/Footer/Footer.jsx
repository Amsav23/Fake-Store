import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import {BiSolidHeart} from 'react-icons/bi'



function Footer() {
  //create state to control my Modal
  const [isOpen, setIsOpen] = React.useState(false)


  return (
    <div className="footer-container">
      <p>Made with love by mimo</p>

        <Link to="/contactus">
          <button className="contact-btn" onClick={()=>setIsOpen(true)}>Contact Us</button>
        </Link>

    </div>
  )
}

export default Footer