import React, {useContext} from 'react'
import './CheckoutItem.css'
import {BsTrash3} from 'react-icons/bs'
import { CheckoutContext } from '../../contexts/CheckoutContext'


function CheckoutItem({product}) {
    //get global state
    //NOTE {} NOT []

    const {removeProduct} = useContext(CheckoutContext)


  return (
    <div className="Checkout-products">
        <div className="checkout-items">
            <img src={product.image} />
            <p>{product.title}</p>
            <p>{product.category}</p>

            <div className="price-elements">
                <p>{product.price}</p>
            </div>
            <BsTrash3 onClick={()=>removeProduct(product.id)} className="trash-can" />
        </div>
    </div>
  )
}

export default CheckoutItem