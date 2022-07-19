import { useDispatch } from 'react-redux';
import BuyButton from '../BuyButton/BuyButton';
import { setItemInCart } from '../../redux/cart/reducer';
import './GameBuy.scss';


function GameBuy ({game}) {
    const dispatch = useDispatch();
    const handleClick = (event) => {
        event.stopPropagation();
        dispatch(setItemInCart(game))
    }

    return (
        <div className='game-buy'>
            <span className='game-buy-price'>{game.price} руб.</span>
            <BuyButton type='primary' onClick={handleClick}>
                В корзину
            </BuyButton>
        </div>
    )
}

export default GameBuy;