import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "white",
      }}
    >
      <div>
        <h2 style={{ margin: 0, color: "white" }}>Telecom System</h2>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/products"
          style={{
            marginRight: "15px",
            color: "white",
            textDecoration: "none",
          }}
        >
          Products
        </Link>
        <Link
          to="/staff"
          style={{
            color: "yellow",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Staff Management
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;