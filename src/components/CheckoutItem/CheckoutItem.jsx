import React, {useContext} from 'react'
import './CheckoutItem.css'
import {BsTrash3} from 'react-icons/bs'
import { CheckoutContext } from '../../contexts/CheckoutContext'


function CheckoutItem({product}) {
    //get global state
    //NOTE {} NOT []

    const {removeProduct} = useContext(CheckoutContext)


  return (
    <div className="checkout-item-products">
        <div className="checkout-item">
            <img src={product.image} />
            <p className='checkout-item-title'>{product.title}</p>
            <p>{product.price}€</p>
            <p>1</p>

            <BsTrash3 onClick={()=>removeProduct(product.id)} className="trash-can" />
        </div>
    </div>
  )
}

export default CheckoutItem