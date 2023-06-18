import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";

function NavBar(){

    return(
        <div className="navbar">
            <Link to="/"><h1 className="logo">Trendcity</h1></Link>
            <ul>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/productos/remeras">Remeras</Link></li>
                <li><Link to="/productos/shorts">Shorts</Link></li>
                <li><Link to="/productos/zapatillas">Zapatillas</Link></li>
            </ul>
            <CartWidget/>
        </div>
    )
}

function CartWidget() {
    const { countItems } = useContext(cartContext);
    return (
        <Link to="/cart">
            <div className="cartItem">
            <img src={cart} alt="Carrito icono" />
            <span className="cartCount">{countItems() === 0 ? "" : countItems()}</span>        
            </div>
        </Link>
    )
}

export default NavBar;