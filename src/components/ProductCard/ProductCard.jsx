import React, {useContext} from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import { IoHeartCircleOutline, IoHeartCircle } from "react-icons/io5";
//import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { FavoritesContext } from '../../contexts/FavoritesContext';

function ProductCard({product}) {
  //get the global state
  //NOTE {} NOT []
  const {addProduct, favorites, removeProduct} = useContext(FavoritesContext)


  //start with a variable to test UI
  //const isFavorite = false;
  //change to state in order to toggle it
  const [isFavorite, setIsFavorite] = React.useState(false)

  //how do we know if this particular product is in favorites?
  React.useEffect(
    ()=>{
      //is product in favorites?
      setIsFavorite(favorites?.find(item=>item.id===product.id))


    }, [favorites] //run anytime favorites changes
  )


  return (
    <div className="product-card">
        <img src={product.image}></img>
        <Link to={`/details/${product.id}`} style={{fontWeight: "bold"}}>{product.title}</Link>
        <p style={{color: "grey"}}>{product.category}</p>
        <p style={{fontWeight: "bold"}}>{product.price}€</p>
        {
          isFavorite?
          <IoHeartCircleOutline onClick={()=>removeProduct(product.id)} className='heart-icon' />
          :
          <IoHeartCircle onClick={()=>addProduct(product)} className='heart-icon' />
        }
    </div>
  )
}

export default ProductCard