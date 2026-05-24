import { useEffect } from "react";
import ProductList from "../components/ProductList";
import products from "../data/products";

const Home = ({ addToCart }) => {
  useEffect(() => {
    document.title = "Shopmate | Home";
  }, []);

  return (
    <div className="container">
      <h1>Trending Products</h1>

      <ProductList
        products={products}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Home;