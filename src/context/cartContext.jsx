import { createContext, useState } from "react";

export const cartContext = createContext({ cart: [] });

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    function addItem(product, count){
        const newCart = [...cart];
        if (isInCart(product.id)) {
            setCart(
                cart.map((cartItem) => {
                    if (cartItem.id === product.id) {
                        return { ...cartItem, count: cartItem.count + count };
                    } else {
                        return { ...cartItem };
                    }
                })
            )
        } else {
            newCart.push({ ...product, count });
            setCart(newCart);
        }
    };


    function isInCart(id) {
        return cart.some((item) => item.id === id);
    };

    function countItems(){
        let total = 0;
        cart.forEach((item) => {
            total += item.count;
        });
        return total;
    };

    function countTotalPrice(){
        let total = 0;
        cart.forEach((item) => {
            total += item.count * item.price;
        });
        return total;
    };

    function clear() {
        setCart([]);
    };
    

    function getItem(id) {
        const itemBuscado = cart.find((item) => item.id === id);
        return itemBuscado;
    };

    function removeItem(idDelete) {
        setCart(cart.filter((item) => item.id !== idDelete));
    };


    return <cartContext.Provider 
    value={{
        cart,
        setCart,
        addItem,
        countItems,
        countTotalPrice,
        clear,
        getItem,
        isInCart,
        removeItem,
    }}>
        {children}
    </cartContext.Provider>
}