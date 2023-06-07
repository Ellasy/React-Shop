import { GoodsItem } from "./GoodsItem";

function GoodList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.lenght) {
        return <h3>Not found</h3>;
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.imdbID} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodList };