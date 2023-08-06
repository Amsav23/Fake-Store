import React, {useContext} from 'react'
import './Checkout.css'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import { useNavigate } from 'react-router-dom'
import Modal from "react-modal"



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: '50%',
        MarginRight: '50%',
        transform: '50%',
        marginBottom: '50%',
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0,0.5)"
    }
}

//Make to bind modal to your element
    Modal.setAppElement(document.getElementById("#root"))


function Checkout() {
    //activate useNavigate
    const navigate = useNavigate()

    const showHomepage = () => {
        //clear the cart
        AiFillSafetyCertificate([])

        //go back to Homepage
        navigate('/')
    }

    //create state to control my modal
    const [isOpen, setIsOpen] = React.useState(false)



    //get global state
    //NOTE {} NOT []

    const {checkout, setInCheckout} = useContext(CheckoutContext)
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

                //can I print each price
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
        <p>Checkout</p>
        <div className="checkout-products">
            {
                checkout?.length > 0 ?
                checkout?.map(item => <CheckoutItem key={item.id} product={item}/>)
                :
                <p>No item in your cart</p>
            }

            <div className="totalCheckout">
                <h2 className="total">Total {total}</h2>
                <button className="checkout-btn" onClick={()=>setIsOpen(true)}>Checkout</button>
            </div>

            <Modal
                isOpen={isOpen}
                
                style={customStyles}
                contentLabel="Checkout Modal"
            >
                <div className='modal'>
                    <div className="modal-header">
                        <h2>Your Order was successful</h2>
                        <button className='modal-close-btn' onClick={()=>setIsOpen(false)}>Close</button>
                    </div>
                    </div>    

                    <div>
                        <h3 className='modal-info'>Check your email...</h3>
                        <button className='return-btn' onClick={showHomepage}>Return to Main Page</button>
                    </div>
                    
            </Modal>
        </div>
    </div>
  )
}

export default Checkout


/*
import React, {useContext} from 'react'
import './Favorites.css'
import {CheckoutContext} from '../../contexts/CheckoutContext'
import ProductCard from './../../components/ProductCard/ProductCard'

function Favorites() {
  //get the global state
  //NOTE {} NOT []
  const {favorites} = useContext(FavoritesContext)


  return (
    <div className="favorites-container">
      <h1>My Favorite Products</h1>
      <div className="favorite-products">
        {
          favorites?.length > 0 ?
          favorites?.map(item => <ProductCard key={item.id} product={item}/>)
          :
          <p>No favorites selected yet</p>
        }
      </div>
    </div>
  )
}

export default Favorites*/