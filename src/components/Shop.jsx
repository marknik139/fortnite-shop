import { useState, useEffect } from "react";
import {API_KEY, API_URL} from '../config'
import { Preloader } from "./Preloader";
import { ItemsList } from "./ItemList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { Alert } from "./Alert";

function Shop() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShow, setCartShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToCart = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const removeFromCart = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId){
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId){
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    const handleCartShow = () => {
        setCartShow(!isCartShow)
    }

    const closeAlert = () => {
        setAlertName('');
    };

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            data.featured && setItems(data.featured);
            setLoading(false)
        })
    }, [])

    return (
        <main className="container content">
            <Cart quantity={order.length} handleCartShow={handleCartShow}/>
            { loading ?
                <Preloader/>
                :
                <ItemsList items={items} addToCart={addToCart}/>
            }
            {isCartShow && <CartList order={order} handleCartShow={handleCartShow} removeFromCart={removeFromCart} incQuantity={incQuantity} decQuantity={decQuantity}/>}
            {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
        </main>)
};

export {Shop};