import { useEffect, useContext } from "react";
import {API_KEY, API_URL} from '../config'
import { ShopContext } from "../context";
import { Preloader } from "./Preloader";
import { ItemsList } from "./ItemList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { Alert } from "./Alert";

function Shop() {

    const {
        loading,
        order,
        isCartShow,
        alertName,
        setItems
    } = useContext(ShopContext);

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setItems(data.featured);
        })
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length}/>
            { loading ? <Preloader/> : <ItemsList/> }
            {isCartShow && <CartList/>}
            {alertName && <Alert/>}
        </main>)
};

export {Shop};