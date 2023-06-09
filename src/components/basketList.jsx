import { BasketItem } from "./basketitem";

function BasketList(props) {
    const { 
        order = [], 
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity;
    }, 0);
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem 
                        key={item.mainId} 
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item} 
                        />
                    ))
            ) : (
                <li className="collection-item black-text">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоимость заказа: {totalPrice} руб. 
            </li>
            <i className="material-icons basket-clear" onClick={handleBasketShow}>
                clear
            </i>
        </ul>
    );
}

export { BasketList };