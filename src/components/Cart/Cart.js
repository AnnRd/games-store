import { useSelector } from 'react-redux';
import { useCallback, useState } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import CartMenu from '../CartMenu/CartMenu';
import './Cart.scss';
import ItemsInCart from '../ItemsInCart/ItemsInCart';
import { useNavigate } from 'react-router-dom';


function Cart () {
    const [isCartMenuVisible, setCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart); //массив игр, которые пользователь выбрал для добавления в корзину
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0);
    const navigate = useNavigate();
    
    const handleClick = useCallback(() => {
        setCartMenuVisible(false);
        navigate('/order');
    }, [navigate]); //вернет новую ф-ю(ссылку) только при обновлении navigate

    return (
        <div className="cart">
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt size={25} className="cart-icon" onClick={() => setCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className="cart-price">{totalPrice} ₽</span> : null}
            {isCartMenuVisible ? <CartMenu items={items} onClick={handleClick} totalPrice={totalPrice}/> : null}
        </div>
    )
}

export default Cart;