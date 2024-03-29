import BuyButton from '../BuyButton/BuyButton';
import CartItem from '../CartItem/CartItem';
import './CartMenu.scss';

function CartMenu ({items, onClick, totalPrice}) {
    return (
        <div className='cart-menu'>
            <div className="cart-menu-games">
                {items.length > 0 ? items.map(game => <CartItem title={game.title} price={game.price} key={game.title} id={game.id}/>) : 'Корзина пуста'}
            </div>
            {items.length > 0 ?
            <div className='cart-menu-ready'>
                <div className="cart-menu-total-price">
                    <span>Итого:</span>
                    <span>{totalPrice} ₽</span>
                </div>
                <BuyButton type='primary' size='m' onClick={onClick}>
                    Оформить заказ
                </BuyButton>
            </div>
            : null}
        </div>
    )
}

export default CartMenu;