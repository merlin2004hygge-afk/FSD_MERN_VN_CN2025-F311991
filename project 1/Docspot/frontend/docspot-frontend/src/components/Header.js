import { Link } from "react-router-dom";
import "../styles/layout.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">DocSpot</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
