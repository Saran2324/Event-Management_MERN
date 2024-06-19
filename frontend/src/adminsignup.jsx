import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logow from "./logow.png";
import logo3 from "./logo3.png";

function AdminSignup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [successmes, setSuccessmes] = useState("");

  const validateForm = () => {
    if (!email || !username || !password || !password2) {
      setError("All fields are required");
      return false;
    }
    if (password !== password2) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setSuccessmes("");

    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:8000/adminsignup", {
        email: email,
        password: password,
        username: username,
      });

      if (response.data === "exist") {
        setSuccessMessage("User already exists");
      } else if (response.data === "impossible") {
        setSuccessMessage("User cannot be created for this ID");
      } else if (response.data === "not exist") {
        setSuccessmes("User created successfully. Please login.");
      } else {
        setError("Error occurred during signup");
      }
    } catch (error) {
      console.error(error);
      setError("Error occurred during signup");
    }
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          maxHeight: "80px",
          boxShadow: "0 1px 10px rgba(0, 0, 0, 0.9)",
          backgroundColor: "navy",
        }}
      >
        <img
          className="logo"
          src={logow}
          alt="Company Logo"
          style={{
            height: "80px",
            marginTop: "10px",
            filter: "brightness(150%)",
          }}
        />
        <h2
          style={{
            marginTop: "25px",
            marginLeft: "20px",
            backgroundImage: `url(${logo3})`,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Kongu Engineering College
        </h2>
        <button
          className="success"
          style={{
            maxWidth: "7%",
            position: "absolute",
            marginLeft: "1190px",
            marginTop: "40px",
            backgroundColor: "transparent",
            border: "none",
            fontWeight: "bold",
          }}
        >
          <a
            onMouseOver={(e) => (e.target.style.color = "red")}
            onMouseOut={(e) => (e.target.style.color = "black")}
            href="https://www.kongu.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white", fontSize: "15px" }}
          >
            Contact
          </a>
        </button>
      </header>
      <form className="newform" onSubmit={handleSubmit}>
        <div className="page">
          <h1>Signup</h1>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <input
            style={{
              marginBottom: "2px",
            }}
            type="password"
            id="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Re-enter Password"
            required
          />
          {error && <p className="error">{error}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          {successmes && <p className="successed">{successmes}</p>}
          <button className="newbtn" type="submit">
            Signup
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default AdminSignup;
