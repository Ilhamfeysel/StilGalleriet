import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '/src/Header.css';
import { AuthContext } from "./context/Authcontext";

const Header = () => {

  const { state } = useContext(AuthContext);
  const isLoggedIn = state.user !==null;

  return (
    <header className="header">
      <h1 className="title">Stilgalleriet</h1> {/* Stilgalleriet */}
      <ul className="menu">
        {isLoggedIn ? (
          <>
          <Link className="link" to="/profile">
            <li>Profil</li>
          </Link>
          <Link className="link" to="/favorites">
            <li>Favorites</li>
          </Link>
          </>
        ) : (
          <>
          <Link className="link" to="/register">
          <li>Register</li>
        </Link>
        <Link className="link" to="/login">
          <li>Login</li>
        </Link>
        </>
        )}
      </ul>
    </header>
  );
};

export default Header;