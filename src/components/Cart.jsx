import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {

    const {
        order,
        handleCartShow = Function.prototype
    } = useContext(ShopContext);

    const quantity = order.length;

    return <div
            className="cart red lighten-1 white-text"
            onClick={handleCartShow}>
                <i className="material-icons">shopping_cart</i>
                {quantity ? <span className="cart-quantity white-text">{quantity}</span> : null}
        </div>
}

export {Cart};