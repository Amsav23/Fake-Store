import React, {useContext} from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { FavoritesContext } from '../../contexts/FavoritesContext'

function ProductCard({product}) {
  //get the global state
  //NOTE {} NOT []
  const {addProduct} = useContext(FavoritesContext)


  //start with a variable to test UI
  const isFavorite = false;


  return (
    <div className="product-card">
        <img src={product.image}></img>
        <Link to={`/details/${product.id}`} style={{fontWeight: "bold"}}>{product.title}</Link>
        <p style={{color: "grey"}}>{product.category}</p>
        <p style={{fontWeight: "bold"}}>{product.price}€</p>
        {
          isFavorite?
          <FaHeart className='heart-icon' />
          :
          <FaRegHeart onClick={()=>addProduct(product)} className='heart-icon' />
        }
    </div>
  )
}

export default ProductCard