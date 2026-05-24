import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";

const AppRoutes = ({
  cart,
  addToCart,
  removeFromCart,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home addToCart={addToCart} />
        }
      />

      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
