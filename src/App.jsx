import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { CartView } from "./components/CartView";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="*" element={<h4 style={{margin: "auto"}}>Error 404: Page not found</h4>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
