const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div>
        <h3>{item.title}</h3>
        <p>₹{item.price}</p>
      </div>

      <button onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;