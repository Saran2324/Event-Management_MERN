import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import Home from "./home";
import Cancel from "./cancel";
import Delete from "./delete";
import Booking from "./mybooking";
import LoginForm from "./dropcontent";
import Adminlogin from "./adminlogin";
import AdminSignup from "./adminsignup";
import SignupForm from "./adminprof";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cancel" element={<Cancel />} />
        <Route exact path="/delete" element={<Delete />} />
        <Route exact path="/mybooking" element={<Booking />} />
        <Route exact path="/dropcontent" element={<LoginForm />} />
        <Route exact path="/adminlogin" element={<Adminlogin />} />
        <Route exact path="/adminsignup" element={<AdminSignup />} />
        <Route exact path="/adminprof" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
