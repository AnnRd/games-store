import { useSelector } from 'react-redux';
import { useState } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import CartMenu from '../CartMenu/CartMenu';
import './Cart.scss';


function Cart () {
    const [isCartMenuVisible, setCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart); //массив игр, которые пользователь выбрал для добавления в корзину
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0);
    return (
        <div className="cart">
            <BiCartAlt size={25} className="cart-icon" onClick={() => setCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className="cart-price">{totalPrice} ₽</span> : null}
            {isCartMenuVisible ? <CartMenu items={items} onClick={() => null} totalPrice={totalPrice}/> : null}
        </div>
    )
}

export default Cart;