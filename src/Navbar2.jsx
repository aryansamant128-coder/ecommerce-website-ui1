import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabaseClient } from "./supabase";

export function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
      
      // Redirect back to root/auth screen immediately
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.message);
      alert("Error logging out. Please try again.");
    }
  };

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
      alignItems: "center", // Keeps links and logout button centered together horizontally
    },
    link: {
      textDecoration: "none",
      color: "#4b5563",
      fontWeight: "500",
    },
    logoutBtn: {
      padding: "8px 16px",
      backgroundColor: "#ef4444", // Modern soft red tone matching your UI color weight
      color: "#ffffff",
      border: "none",
      borderRadius: "6px",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
      fontFamily: "sans-serif",
      transition: "background-color 0.2s ease",
    }
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
          
          {/* Logout Action Element */}
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}