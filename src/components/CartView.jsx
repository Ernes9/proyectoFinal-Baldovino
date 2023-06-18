import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import remove from "../assets/remove.png";
import CheckoutForm from "./CheckoutForm";
import Swal from 'sweetalert2';
import { createOrder } from "../firebase/firebase";
import { useLocation, useNavigate } from "react-router-dom";


export const CartView = () => {
  const { cart, removeItem, countTotalPrice, clear} = useContext(cartContext)
  const navigateTo = useNavigate()

  async function handleConfirm(userData){
    const order = {
      products: cart,
      user: userData,
      date: new Date(),
      price: countTotalPrice()
    };

    try{
      const orden = await createOrder(order)
      clear()
      Swal.fire({
        icon: 'success',
        title: 'Orden Creada!',
        text: `Id de tu orden: ${orden}`,
        footer: '<a href="">Seguimiento de envío</a>'
      })
      navigateTo("/productos")
    }
    catch (error){
      Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error!',
        text: `Error: ${error}`,
        footer: '<a href="">Por qué tuve este error?</a>'
      })
    }
  }

  return (
    <div>
      {Object.keys(cart).length > 0 ? (
        <div>
          <h2 className="titleCarrito">Tu carrito</h2>
          <table className="table">
            <thead>
              <tr>
                <th className="th">Producto</th>
                <th className="th">Cantidad</th>
                <th className="th">Imagen</th>
                <th className="th">Precio</th>
                <th className="th">Remover</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((producto) => (
                <tr className="tr" key={producto.id}>
                  <td className="td">{producto.name}</td>
                  <td className="td">{producto.count}</td>
                  <td className="td"> <img className="imagenCart" src={producto.img} alt={producto.name} /></td>
                  <td className="td">${producto.count * producto.price}</td>
                  <td className="td"><a onClick={() => removeItem(producto.id)}><img className="imagenRemove" src={remove} alt="imagen remover" /></a></td>
                </tr>
              ))}
            </tbody>
          </table>
          <CheckoutForm handleConfirm={handleConfirm}/>
        </div>
      ) : (
        <h2 className="titleCarrito">El carrito está vacío</h2>
      )}
    </div>
  );
};
