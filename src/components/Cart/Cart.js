import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';
import CartMenu from '../CartMenu/CartMenu';
import './Cart.scss';


function Cart () {
    const items = useSelector(state => state.cart.itemsInCart); //массив игр, которые пользователь выбрал для добавления в корзину
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0);
    return (
        <div className="cart">
            <BiCartAlt size={25} className="cart-icon"/>
            <span className="cart-price">{totalPrice} ₽</span>
            <CartMenu items={items} onClick={() => null} totalPrice={totalPrice}/>
        </div>
    )
}

export default Cart;