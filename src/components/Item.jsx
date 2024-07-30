import React, { useContext} from 'react';
import { CartContext } from '../context/Cart';

const Item = (props) => {
  const cart = useContext(CartContext);
  console.log("Cart", cart);
  return (
    <div className='Item-card'>
      <img src = {props.img} />
      <h2>{props.name}</h2>
      <p>${props.price}/kg</p>
      <button className='add-button'onClick={()=> {
        cart.setItems(
          [...cart.items, {name: props.name, price: props.price}]
        )
      }}>Add to Cart</button>
    </div>
  )
}

export default Item