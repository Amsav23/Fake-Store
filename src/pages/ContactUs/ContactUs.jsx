import React from 'react'
import "./ContactUs.css"


function ContactUs() {
    return (
        <div className="contact-container">
            <h3>Contact Us</h3>
            <form className="form-container">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <textarea placeholder="Message" rows="5">Write your message here</textarea>
                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}
export default ContactUs