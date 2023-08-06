import React, {useContext} from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import { IoHeartCircleOutline, IoHeartCircle } from "react-icons/io5";
import { CheckoutContext } from '../../contexts/CheckoutContext';


function ProductCard({product}) {
  //get the global state
  //NOTE {} NOT []
  const {addProduct, checkout, removeProduct} = useContext(CheckoutContext)

  //start with a variable to test UI
  //const isFavorite = false;
  //change to state in order to toggle it
  const [inCheckout, setInCheckout] = React.useState(false)

  //how do we know if this particular product is in checkout?
  React.useEffect(
    ()=>{
      //is product in checkout?
      setInCheckout(checkout?.find(item=>item.id===product.id))

    }, [checkout] //run anytime checkout changes
  )

  return (
    <div className="product-card">
        <img src={product.image}></img>
        <Link to={`/details/${product.id}`} style={{fontWeight: "bold"}}>{product.title}</Link>
        <p style={{color: "grey"}}>{product.category}</p>
        <p style={{fontWeight: "bold"}}>{product.price}€</p>
          <div className='checkout-card'>
          {
            inCheckout?
           <IoHeartCircleOutline onClick={()=>removeProduct(product.id)} className='heart-icon-remove' />
           :
           <IoHeartCircle onClick={()=>addProduct(product)} className='heart-icon-add' />
          }
        </div>
    </div>
  )
}

export default ProductCard