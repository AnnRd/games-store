import { useDispatch, useSelector } from 'react-redux';
import BuyButton from '../BuyButton/BuyButton';
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer';
import './GameBuy.scss';


function GameBuy ({game}) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === game.id) //если элемент из списка в корзине, вернет true

    const handleClick = (event) => {
        event.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game));
        }
    }

    return (
        <div className='game-buy'>
            <span className='game-buy-price'>{game.price} руб.</span>
            <BuyButton type={isItemInCart ? 'secondary' : 'primary'} onClick={handleClick}>
                {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
            </BuyButton>
        </div>
    )
}

export default GameBuy;