import { useState } from "react";
import Swal from 'sweetalert2';

export default function CheckoutForm({handleConfirm}){
    const [userData, setUserData] = useState({
        nombre: "",
        telefono: "",
        correo: "",
    });

    function onSubmit(e) {
        if (userData.nombre === "" || userData.telefono === "" || userData.correo === ""){
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Complete todos los campos!',
            }) 
        } else {
            e.preventDefault();
            console.log(userData);
            handleConfirm(userData);
        }
    }

    function onInputChange(e){
        const key = e.target.name;
        const value = e.target.value;

        const newData = {...userData};
        newData[key] = value;
        setUserData(newData);
    }


    return(
        <form className="checkout-form" onSubmit={onSubmit}>
            <h2>Ingresá tus datos para completar la compra!</h2>
            <div className="coolinput">
                <label className="text">Nombre:</label>
                <input 
                    type="text" 
                    placeholder="Escribe aquí..."
                    value={userData.nombre}
                    name="nombre" 
                    className="input"
                    onChange={onInputChange}
                />
            </div>
            <div className="coolinput">
                <label className="text">Teléfono:</label>
                <input 
                    type="text" 
                    placeholder="Escribe aquí..."
                    value={userData.telefono} 
                    name="telefono" 
                    className="input"
                    onChange={onInputChange}
                />
            </div>
            <div className="coolinput">
                <label className="text">Correo:</label>
                <input 
                    type="text" 
                    placeholder="Escribe aquí..."
                    value={userData.correo}
                    name="correo" 
                    className="input"
                    onChange={onInputChange}
                />
            </div>
            <button className="form-button">
                <span className="transition"></span>
                <span className="gradient"></span>
                <span className="label">Enviar</span>
            </button>
        </form>


    )
}