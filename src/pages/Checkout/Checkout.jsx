import React, {useContext} from 'react'
import './Checkout.css'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay:{
        backgroundColor: "rgba(0,0,0,0.5",
    }
}

//Make to bind modal to your element
    Modal.setAppElement(document.getElementById("#root"))


function Checkout() {
    //activate useNavigate
    const navigate = useNavigate()

    const showHomepage = () => {
        //clear the cart
        setCheckout([])

        //go back to Homepage
        navigate('/')
    }

    //create state to Control my Modal
    const [isOpen, setIsOpen] = React.useState(false)

    //get global state
    //NOTE {} NOT []
    const {checkout, setCheckout} = useContext(CheckoutContext)
    const [total, setTotal] = React.useState(0)

    //when the checkout cart changes, I need to calculate the total
    //calculate the total
    //console.log the answer
    //create state

    React.useEffect(
        () => {
            //create and initialize my accumilator
            let sum = 0
            for (let i = 0; i < checkout.length; i++) {

                //can I print each price?
                //console.log(cart[i].price)

                //add this price to the accumilator
                sum = sum + checkout[i].price
            }

            console.log('sum', sum)
            //store in state
            setTotal(sum)
        }, [checkout]
    )

  return (
    <div className="checkout-container">
        <div className="checkout-products">
            {
                checkout?.length > 0 ?
                checkout?.map(item => <CheckoutItem key={item.id} product={item}/>)
                :
                <p>No items in your cart</p>
            }

            <div className="total-checkout">
                <h2>Total {total}€</h2>
                <button className="checkout-btn" onClick={()=>setIsOpen(true)}>Checkout</button>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={()=>setIsOpen(false)}
                style={customStyles}
                contentLabel="Checkout Modal"
            >  
                <div className="modal">
                    <h2>Your Order was successful!</h2>
                    <button className='close-btn' onClick={()=>setIsOpen(false)}>Close</button>
                    <h3>Check your email for the order confirmation. Thank you for shopping at Amy's Fake Store!</h3>
                    <button className='return-btn' onClick={showHomepage}>Return to Main Page</button>
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default Checkout