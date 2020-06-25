import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => (
  <header className="app-header">
    <Link to="/dictionary" className="header-title">
      <i className="fas fa-graduation-cap"></i>
      Learn n' Play
    </Link>
  </header>
);

export default Header;