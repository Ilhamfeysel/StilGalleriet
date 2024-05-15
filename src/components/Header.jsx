import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "/src/Header.css";
import { AuthContext } from "../context/Authcontext";
import HomePageButtons from "./HomePageButtons";
import { Button } from "react-bootstrap";

const Header = () => {
  const { state } = useContext(AuthContext);
  const isLoggedIn = state.user !== null;

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
            <HomePageButtons />
            <Button
              variant="outline-secondary"
              onClick={() => (window.location.href = "/register")}
            >
              Register
            </Button>{" "}
            <Button
              variant="outline-secondary"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </Button>{" "}
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
