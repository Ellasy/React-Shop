function GoodsItem(props) {
    const { 
        mainId, 
        displayName, 
        displayDescription, 
        price, 
        displayAssets, 
        addToBasket = Function.prototype, 
    } = props;

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName} />
            </div>
            <div className="card-content">
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button 
                    className="btn"
                    onClick={() =>
                        addToBasket(
                            mainId,
                            displayName,
                            price,
                        )
                    }
                >
                    Купить
                </button>
                <span className="right">{price.finalPrice}{" "} руб.</span>
            </div>
        </div>
    );
}

export { GoodsItem };