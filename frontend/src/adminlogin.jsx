import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../src/App.css";
import logo3 from "./logo3.png";
import logow from "./logow.png";

function Adminlogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/adminlogin", {
        email,
        username, // Include username in the request
        password,
      });
      if (response.data === "exist") {
        navigate("/adminprof", { state: { email, username } }); // Pass both email and username
      } else if (response.data === "not exist") {
        setmessage("Email or Password you specified is invalid.");
      }
    } catch (error) {
      alert("Error occurred during login");
      console.log(error);
    }
  }

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
            marginTop: "35px",
            backgroundColor: "transparent",
            border: "none",
            fontWeight: "bold",
          }}
        >
          <a
            onMouseOver={(e) => (e.target.style.color = "red")}
            onMouseOut={(e) => (e.target.style.color = "white")}
            href="https://www.kongu.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white", fontSize: "15px" }}
          >
            Contact
          </a>
        </button>
      </header>
      <form className="newform" onSubmit={submit}>
        <div className="page">
          <h1>Admin Login</h1>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setmessage("");
            }}
            placeholder="Email"
            required
          />
          <input
            type="text" // Change input type to text for username
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setmessage("");
            }}
            placeholder="Username"
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setmessage("");
            }}
            placeholder="Password"
            required
          />
          {message && (
            <p style={{ fontSize: "13px", marginRight: "80px", color: "red" }}>
              {message}
            </p>
          )}
          <button className="newbtn" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default Adminlogin;
