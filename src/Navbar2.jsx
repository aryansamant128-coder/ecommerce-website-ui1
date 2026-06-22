import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const styles = {
    nav: {
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      position: "sticky",
      top: 0,
      zIndex: 50,
      fontFamily: "sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      display: "flex",
      justifyContent: "space-between",
      height: "64px",
      alignItems: "center",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "800",
      color: "#4f46e5",
      textDecoration: "none",
    },
    links: {
      display: "flex",
      gap: "32px",
    },
    link: {
      textDecoration: "none",
      color: "#4b5563",
      fontWeight: "500",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <h2 style={styles.logo}>VOGUEAURA</h2>

        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/categories" style={styles.link}>Categories</Link>
          <Link to="/cards" style={styles.link}>cards</Link>
          <Link to="/testimonials" style={styles.link}>Reviews</Link>
          <Link to="/add-product" style={styles.link}>Add product</Link>
        </div>
      </div>
    </nav>
  );
}