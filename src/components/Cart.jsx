import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import {clearCart} from '../utils/cartSlice'

const Cart = () => {
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);
    return (
        <div>
            <h1>My Cart</h1>
            <button className="py-1 px-2 bg-red-100" onClick={() => handleClear()}>Clear Cart</button>
            {cartItems.map((item) => <CartItem key={item.id} {...item} />)}
        </div>
    );
}

export default Cart;