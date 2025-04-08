import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import AuthForm from "../Components/AuthForm";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: darkMode ? "#0f172a" : "#eef3fd",
        color: darkMode ? "#f8fafc" : "#1e293b",
        transition: "all 0.3s ease",
      }}
    >
      {/* Left: Intro (Half width) */}
      <div
        style={{
          flex: 0.5, // Takes up half the available width
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: darkMode ? "#1e293b" : "#eef3fd",
          color: darkMode ? "#f8fafc" : "#1e293b",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ position: "absolute", top: "1rem", right: "1rem", cursor: "pointer" }} onClick={toggleMode}>
          {darkMode ? <FaSun size={24} color="#facc15" /> : <FaMoon size={24} color="#334155" />}
        </div>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Welcome to CreditWise</h1>
        <p style={{ fontSize: "1.2rem", textAlign: "center", maxWidth: "400px" }}>
          Your all-in-one smart app for managing tasks, finances, and more.
        </p>
      </div>

      {/* Right: AuthForm (Half width, centered content) */}
      <div
        style={{
          flex: 0.5, // Takes up the other half of the available width
          display: "flex",
          justifyContent: "center", // Center AuthForm horizontally within its container
          alignItems: "center",   // Center AuthForm vertically within its container
          backgroundColor: darkMode ? "#0f172a" : "#ffffff",
          transition: "all 0.3s ease",
        }}
      >
        <AuthForm />
      </div>
    </div>
  );
};

export default Home;