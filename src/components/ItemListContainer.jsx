import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";



function ItemListContainer(){
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [titulo, setTitulo] = useState("Productos");


    useEffect(() => {
        if (categoria) {
            setTitulo(categoria);
        } else {
            setTitulo("Productos");
        }
        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef;
        const productsSnapshot = getDocs(q);
        productsSnapshot.then((resp) => {
            
            setProductos(resp.docs.map((doc) => {

                    return {...doc.data(), id: doc.id}

                })
            )
        })
    }, [categoria]);

    return(
        <div className="itemList">
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}



export default ItemListContainer;