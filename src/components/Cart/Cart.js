import './Cart.scss';
import { BiCartAlt } from 'react-icons/bi';

function Cart () {
    return (
        <div className="cart">
            <BiCartAlt size={25} className="cart-icon"/>
            <span className="cart-price">345 $</span>
        </div>
    )
}

export default Cart;