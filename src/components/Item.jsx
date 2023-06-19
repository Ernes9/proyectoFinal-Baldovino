import { Link } from "react-router-dom";

const Item = ({ productos} ) => {
    return(
            <div className="card">
                <img src={productos.img} alt={productos.name} />
                <div className="card-content">
                    <h2>{productos.name}</h2>
                    <p>Precio: ${productos.price}</p>
                    <p>Categoría: {productos.category}</p>
                    <Link to={`/item/${productos.id}`} className="button">Ver más</Link>
                </div>
            </div>
    )
};

export default Item;