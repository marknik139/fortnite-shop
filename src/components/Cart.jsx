function Cart(props) {
    const {
        quantity = 0,
        handleCartShow = Function.prototype
    } = props;

    return <div
            className="cart red lighten-1 white-text"
            onClick={handleCartShow}>
                <i className="material-icons">shopping_cart</i>
                {quantity ? <span className="cart-quantity white-text">{quantity}</span> : null}
        </div>
}

export {Cart};