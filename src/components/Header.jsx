import { Link } from "react-router-dom";
import '/src/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Stilgalleriet</h1> {/* Stilgalleriet */}
      <ul className="menu">
        <Link className="link" to="/register">
          <li>Register</li>
        </Link>
        <Link className="link" to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;