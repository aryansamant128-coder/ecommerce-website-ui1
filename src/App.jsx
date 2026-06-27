import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Hero } from "./Hero1";
import { Navbar } from "./Navbar2";
import { Categories } from "./Categories";
import { Testimonials } from "./Tesstimonials";
import { Footer } from "./Footer";
import Cards from "./Cards";
import ProductAddForm from "./ProductAddForm";

// Import your unified Auth component instead of separate pages
import Auth from "./Auth"; 
import { supabaseClient } from "./supabase";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Show the single Auth page if there is no logged-in session
  if (!session) {
    return <Auth />;
  }

  // Once logged in, show the e-commerce store layout
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "20px 0", color: "#fff" }}>
        Welcome to the E-commerce Website
      </h1>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/add-product" element={<ProductAddForm />} />
        <Route path="/footer" element={<Footer />} />
        {/* Redirect any other paths back to home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;