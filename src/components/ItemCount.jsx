import { useState } from "react"

export const ItemCount = ({ onAddToCart }) => {
    const [count, setCount] = useState(1);

    function handleSubstract(){
        count > 1 && setCount(count-1);
    }

    function handleAdd(){
        setCount(count+1);
    }

    return (
        <div className="item-count-box">
            <div className="item-count">
                <button onClick={handleSubstract}>-</button>
                <p>{count}</p>
                <button onClick={handleAdd}>+</button>
            </div>
            <div className="agregar-al-carrito">
            <a href="#" className="button" onClick={() => onAddToCart(count)}>Agregar al carrito</a>
            </div>
        </div>
    )
}
