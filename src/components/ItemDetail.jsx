import { ItemCount } from "./ItemCount";
import { cartContext } from "../context/cartContext";
import { useContext } from "react";

const ItemDetail = ({item}) => {

const { addItem } = useContext(cartContext)

    function onAddToCart(count) {
        addItem(item, count);
        console.log(count)
    }

    return(
        <div className="product-card">
            <div className="product-image">
                <img src={item.img} alt={item.name}/>
            </div>
            <div className="product-details">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Categoría: {item.category}</p>
                <p>Precio: ${item.price}</p>
            <ItemCount onAddToCart={onAddToCart}/>
            </div>
        </div>
    )
}

export default ItemDetail;