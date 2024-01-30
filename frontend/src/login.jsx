
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../src/App.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [username, setusername] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password
      });

      if (response.data === "exist") {
        // setusername(response.data.username);
        navigate("/home", { state: {id:email} });
      } else if (response.data === "Not exist") {
        alert("User has not signed up");
      } 
    } catch (error) {
      alert("Error occurred during login");
      console.log(error);
    }
  }

  return (
    <form onSubmit={submit}>
      <div>
        <h1>Login</h1>
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
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        <p>
          Do you have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </form>
  );
}

export default Login;
