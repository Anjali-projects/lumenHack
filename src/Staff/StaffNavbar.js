import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo.jpg";
import "./StaffNavbar.css";

const StaffNavbar = () => {
  const location = useLocation();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" aria-label="Home">
          <img src={logo} alt="Company Logo" className="navbar-logo" />
        </Link>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            to="/dashboard"
            className={`navbar-link ${
              location.pathname === "/dashboard" ? "active" : ""
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/products"
            className={`navbar-link ${
              location.pathname === "/products" ? "active" : ""
            }`}
          >
            Products
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/transactions"
            className={`navbar-link ${
              location.pathname === "/transactions" ? "active" : ""
            }`}
          >
            Transactions
          </Link>
        </li>
        <li className="navbar-item">
          <a
            href="#section-id" // Example: ID of the section
            className="navbar-link"
            onClick={(e) => handleScroll(e, "section-id")}
          >
            Scroll to Section
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default StaffNavbar;
