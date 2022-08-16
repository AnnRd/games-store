import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../../components/utils';
import OrderItem from '../../components/OrderItem/OrderItem';
import  './OrderPage.scss';

function OrderPage() {
    const items = useSelector(state => state.cart.itemsInCart);

    if(items?.length < 1) {
        return <h1>Корзина пуста</h1>
    }

    return (
        <div className='order-page'>
            <div className="order-page-left">
                {items?.map(game => <OrderItem game={game}/>)}
            </div>
            <div className="order-page-right">
                <div className="order-page-total-price">
                    <span>Количество товаров: {items?.length} <br /> Итоговая сумма: {calcTotalPrice(items)} ₽</span>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;