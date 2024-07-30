import {useContext} from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
    const cart = useContext(CartContext);
    const total = cart.items.reduce((a,b)=>a + b.price, 0)
    return(
        <div className="Cart-box">
            <h1>Cart</h1>
            {
                cart.items.map(
                    (item) => <li>{item.name} - ${item.price}</li>
                )
            }
            <h4>Total: ${total}</h4>
            <button className="checkout-button">Checkout</button>
        </div>
    )
}

export default Cart;