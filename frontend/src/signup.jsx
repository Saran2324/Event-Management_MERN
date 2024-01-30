import React from "react";
import { Link } from "react-router-dom";
import "../src/App.css";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setemail] = useState("");
  const [username, setname] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const equal = password !== password2;

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email: email,
        password: password,
        username: username,
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "Not exist") {
        alert("User created successfully");
      } else {
        alert("Error occurred during signup");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred during signup");
    }
  }

  return (
    <form>
      <div>
        <h1>Signup</h1>
        <input
          type="name"
          id="username"
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Username"
          required
        />
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Enter password"
          required
        />
        <input
          type="password"
          id="password"
          onChange={(e) => setpassword2(e.target.value)}
          placeholder="Re-enter Password"
          required
        />
        <p>{equal && "Passwords do not match"}</p>
        <button onClick={submit}>Signup</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </form>
  );
}

export default Signup;
