import React from 'react'
import './Footer.css'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');



function Footer() {
  //create state to control my Modal
  const [isOpen, setIsOpen] = React.useState(false)


  return (
    <div className="footer-container">
        Made with love by mimo
        <button className="contact-btn" onClick={()=>setIsOpen(true)}>Contact Us</button>

        <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Contact Us Modal"
        >
        <div className="modal-header">
          <h2>Contact Us</h2>
          <button className="modal-close-btn" onClick={()=>setIsOpen(false)}>X</button>
        </div>

        <form className="form">
          <label>
            <input type="name" defaultValue="First Name" />
          </label>
          <label>
            <input type="name" defaultValue="Last Name" />
          </label>
          <label>
            <input type="text" style={{padding: "12px 12px 100px 12px"}} defaultValue="Write your message here" />
          </label>

          <button type="submit" onClick={() => this.props.handleSubmit(this.state.name)}>Submit</button>
        </form>
      </Modal>

    </div>
  )
}

export default Footer