import { useState } from "react";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  return (
    <>
      <Navbar cart={cart} />

      <AppRoutes
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
}

export default App;
