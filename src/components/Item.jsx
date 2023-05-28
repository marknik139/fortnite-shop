import { useContext } from "react";
import { ShopContext } from "../context";

function Item(props) {
    const {
        id,
        name,
        description,
        price,
        full_background
    } = props;

    const {addToCart} = useContext(ShopContext);

    return <div className="card">
                <div className="card-image">
                    <img
                        src={full_background}
                        alt={name}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src=`https://via.placeholder.com/300x300/f50c0c/ffffff/?text=${name}`;
                        }}
                        />
                </div>
                <div className="card-content">
                    <span className="card-title">{name}</span>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <button className="btn red" onClick={() => addToCart({id, name, price})}>Buy</button>
                    <span className="right" style={{fontSize: '1.8rem'}}>{price} $</span>
                </div>
            </div>
}

export {Item}