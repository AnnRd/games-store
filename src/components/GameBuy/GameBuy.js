import BuyButton from '../BuyButton/BuyButton';
import './GameBuy.scss';


function GameBuy ({game}) {
    return (
        <div className='game-buy'>
            <span className='game-buy-price'>{game.price} руб.</span>
            <BuyButton type='primary' onClick={ () => null}>
                В корзину
            </BuyButton>
        </div>
    )
}

export default GameBuy;