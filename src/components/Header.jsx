import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/src/Header.css";
import { AuthContext } from "../context/AuthContext";
import HomePageButtons from "./HomePageButtons";
import { Button } from "react-bootstrap";

const Header = () => {
  const { state, dispatch } = useContext(AuthContext);
  const isLoggedIn = state.user !== null;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    window.localStorage.removeItem("user");
    console.log("User logged out");

    return navigate("/");
  };

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
            <Link className="link" to="/new-ad">
              <li>New Ad</li>
            </Link>
            <Button variant="outline-secondary" onClick={handleLogout}>
              Log out
            </Button>
          </>
        ) : (
          <>
            <HomePageButtons />
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
