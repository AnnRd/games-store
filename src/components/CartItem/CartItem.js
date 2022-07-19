import './CartItem.scss';

function CartItem({title, price, id}) {
    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item-price">
                <span>{price} ₽</span>
            </div>
        </div>
    );
}

export default CartItem;