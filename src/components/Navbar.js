import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          A New Recipe!
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
