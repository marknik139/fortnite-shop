import { useContext } from "react";
import { ShopContext } from "../context";
import { CartItem } from "./CartItem";

function CartList() {

    const {
        order = [],
        handleCartShow = Function.prototype
    } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return <ul className="collection cart-list">
            <li className="collection-item active red lighten-1">Cart</li>
            {
                order.length ? order.map(item => (
                    <CartItem
                        key={item.id}
                        {...item}
                    />
                ))
                    :
                <li className="collection-item active red lighten-3">Cart is empty</li>
            }
            <li className="collection-item">
                Total Price: {totalPrice} $
            </li>
            <li className="collection-item">
                <button className="btn btn-small red lighten-1">Checkout</button>
            </li>
            <i className="material-icons cart-close red lighten-3" onClick={handleCartShow}>close</i>
        </ul>
}

export {CartList}