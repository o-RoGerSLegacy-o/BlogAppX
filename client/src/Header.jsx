import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        Reminiscers
      </Link>
      <nav>
        <Link to="/login"> login</Link>
        <Link to="/register"> Register</Link>
      </nav>
    </header>
  );
};

export default Header;
