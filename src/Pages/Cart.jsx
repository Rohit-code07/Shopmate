import { useEffect } from "react";
import CartItem from "../components/CartItem";

const Cart = ({ cart, removeFromCart }) => {
  useEffect(() => {
    document.title = "Shopmate | Cart";
  }, []);

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;