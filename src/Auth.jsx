import { useState } from "react";
import { supabaseClient } from "./supabase";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      if (isLogin) {
        // Supabase Login
        const { error } = await supabaseClient.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else {
        // Supabase Sign Up
        const { error } = await supabaseClient.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        alert("Check your email for the confirmation link!");
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>{isLogin ? "Login" : "Sign Up"}</h2>

        {errorMsg && <p style={styles.error}>{errorMsg}</p>}

        <form onSubmit={handleAuth} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Processing..." : isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p style={styles.toggleText}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span style={styles.link} onClick={() => { setIsLogin(!isLogin); setErrorMsg(""); }}>
            {isLogin ? "Sign Up here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
}

// Inline Styles to fix layout issues and center the card vertically
const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#121212", color: "#fff", fontFamily: "sans-serif" },
  card: { padding: "40px", borderRadius: "12px", backgroundColor: "#1e1e1e", boxShadow: "0 8px 24px rgba(0,0,0,0.6)", width: "100%", maxWidth: "400px", textAlign: "center" },
  heading: { marginBottom: "24px", fontSize: "2rem", fontWeight: "600" },
  form: { display: "flex", flexDirection: "column", gap: "20px" },
  inputGroup: { display: "flex", flexDirection: "column", textAlign: "left", gap: "6px" },
  label: { fontSize: "0.85rem", color: "#aaa" },
  input: { padding: "12px", borderRadius: "6px", border: "1px solid #333", backgroundColor: "#2a2a2a", color: "#fff", fontSize: "1rem" },
  button: { padding: "12px", borderRadius: "6px", border: "none", backgroundColor: "#007bff", color: "#fff", fontSize: "1rem", fontWeight: "bold", cursor: "pointer", marginTop: "10px", transition: "background 0.2s" },
  error: { color: "#ff4d4d", fontSize: "0.9rem", marginBottom: "15px" },
  toggleText: { marginTop: "24px", fontSize: "0.9rem", color: "#aaa" },
  link: { color: "#007bff", cursor: "pointer", fontWeight: "bold", textDecoration: "underline" }
};