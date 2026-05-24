import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img
          src={logo}
          alt="Shopmate Logo"
          className="logo-img"
        />

        <h2 className="logo">Shopmate</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/cart" className="cart-btn">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;