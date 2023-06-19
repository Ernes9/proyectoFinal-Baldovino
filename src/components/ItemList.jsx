import Item from "./Item";
import { capitalize } from "../helpers/capitalize";
import Loader from "./Loader";


const ItemList = ({ isLoading, productos, titulo }) => {
    
    if (isLoading) return <Loader/>


    // Si no lo meto en un setTimeout me aparece despues del loader
    setTimeout(() => {
        if (productos.length === 0 && isLoading == false) return <h2 style={{display: "flex", flexDirection: "row", justifyContent:"center"}}>No encontramos productos</h2>;     
    }, 1000);


    return(
        <div className="container">
            <h2 className="main-title">{capitalize(titulo)}</h2>
            <div className="productos">
                { productos.map((prod) => <Item productos={prod} key={prod.id}/>) }
            </div>
        </div>
    )
};

export default ItemList;