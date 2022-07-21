import { useDispatch } from 'react-redux';
import GameCover from '../GameCover/GameCover';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './OrderItem.scss';

function OrderItem({game}) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    return (
        <div className="order-item">
            <div className="order-item-cover">
                <GameCover image={game.image}/>
            </div>
            <div className="order-item-title">
                <span> {game.title} </span>
            </div>
            <div className="order-item-price">
                <span>{game.price} ₽</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item-delete-icon"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}

export default OrderItem;