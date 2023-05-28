import { useContext } from "react";
import { ShopContext } from "../context";
import { Item } from "./Item";

function ItemsList() {

    const {
        items = []
    } = useContext(ShopContext);

    if (!items.length) {
        return <h3>Nothing here</h3>
    }

    return <div className="items">
        {items.map((item) => (
            <Item key={item.id} {...item}/>
        ))}
    </div>
}

export { ItemsList }