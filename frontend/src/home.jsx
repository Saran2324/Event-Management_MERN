import React, { useState } from "react";
import axios from "axios";
import bookImage from "./book.jpg";
import logoImage from "./pure.png";
import sysImage from "./sys2.png";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./dropdown";

function Home() {
  // State to hold form data
  const location = useLocation();
  const usernameacc = location.state.username;
  const emaillogin = location.state.email;

  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownOnMouseOver = () => {
    setShowDropdown(true);
  };

  const hideDropdownOnMouseOut = () => {
    setShowDropdown(false);
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [seminarhall, setSeminarHall] = useState("");
  const [curdate, setCurDate] = useState("");
  const [curday, setCurDay] = useState("");
  const [purpose, setPurpose] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const validateForm = () => {
    if (email!== emaillogin) {
      setError("Enter your Registered Email");
      return false;
    }
    return true;
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send form data to backend
      if (!validateForm()) return;
      const response = await axios.post("http://localhost:8000/home", {
        name,
        email,
        department,
        seminarhall,
        curdate,
        curday,
        purpose,
      });
      if (response.data === "booked") {
        alert("You have sent an Request for Booking.");
      } else if (response.data === "already booked") {
        alert("The Hall is already Booked");
      } else {
        alert("Error during booking.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        
      }}
    >
      <div
        className="header"
        style={{
          backgroundColor: "transparent",
          color: "#fff",
          padding: "5px",
          textAlign: "center",
          position: "absolute",
          justifyContent: "center",
          top: "40%",
          left: "10%",
          fontSize: "25px",
          maxHeight: "50px",
       
        }}
      >
        <h1>
          Welcome to KEC <br />
          &nbsp;&nbsp;&nbsp;Hall Booking.
        </h1>
      </div>
      <img
        className="logo"
        src={logoImage}
        alt="College Logo"
        style={{
          height: "100px",
          width: "100px",
          filter: "brightness(100%)",
          position: "absolute",
          marginLeft: "45px",
          marginTop: "65px",
        }}
      />
      <Dropdown />

      <div
        className="dropdown"
        style={{
          position: "absolute",
          textAlign: "center",
          right: "20px",
          top: "15px",
        }}
      >
        <div style={{}}>
          <button
            onMouseOver={showDropdownOnMouseOver}
            onMouseOut={hideDropdownOnMouseOut}
            className="dropbtn"
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "16px",
              color: showDropdown ? "blue" : "black",
            }}
          >
            {" "}
            <p style={{ position: "absolute", top: "-2px", right: "50px" }}>
              {usernameacc}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="black"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </button>
        </div>

        {showDropdown && (
          <div
            className="dropdown-content"
            onMouseOver={showDropdownOnMouseOver}
            onMouseOut={hideDropdownOnMouseOut}
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "120px",
              marginTop: "0px",
              zIndex: "1",
              backgroundColor: "#f9f9f9",
              filter: "brightness(120%)",
              textDecoration: "none",
              fontSize: "13px",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.9)",
              position: "absolute",
              left: "-60px", // Adjust the left positioning here
            }}
          >
            <Link
              to={{ pathname: "/profile", search: `?email=${emaillogin}` }}
              style={{
                textDecoration: "none",
                padding: "8px",
                fontSize: "14px",
                color: "black",
              }}
            >
              Profile
            </Link>
            <Link
              to={{ pathname: "/mybooking", search: `?email=${emaillogin}` }}
              style={{
                textDecoration: "none",
                padding: "8px",
                fontSize: "14px",
                color: "black",
              }}
            >
              Requested Halls
            </Link>
            <Link
              to={{ pathname: "/delete", search: `?email=${emaillogin}` }}
              style={{
                textDecoration: "none",
                padding: "8px",
                fontSize: "14px",
                color: "black",
              }}
            >
              Booked Halls
            </Link>
            <Link
              to={{ pathname: "/login", search: `?email=${emaillogin}` }}
              style={{
                textDecoration: "none",
                padding: "8px",
                fontSize: "14px",
                color: "black",
              }}
            >
              logout
            </Link>
          </div>
        )}
      </div>

      <div
        className="left-side"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="left-border"
          style={{
            backgroundImage: `url(${bookImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "brightness(50%)",
            border: "200px 200px solid",
            height: "630px",
            width: "590px",
            borderRadius: "5%",
            zIndex: "-1",
            margin: "55px 50px ",
          }}
        />
      </div>
      <div
        className="right-side"
        style={{
          marginTop: "55px",
          marginLeft: "20px",
          flex: 1,
          backgroundImage: `url(${sysImage})`,
          backgroundRepeat: "no-repeat",
          border: "200px 200px solid",
          borderRadius: "50%",
        }}
      >
        {" "}
        <div
          className="booking-system"
          style={{
            padding: "5px 20px 20px 20px",
            position: "absolute",
            width: "38%",
            backgroundColor: "#ffffff",
            border: "2px solid #ccc",
            borderRadius: "5%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            maxHeight: "650px",
          }}
        >
          <h2
            style={{
              marginLeft: "140px",
              color: "rgb(203, 48, 5)",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            }}
          >
            Hall Booking System
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <label
              htmlFor="name"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />

            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value);setError("")}}
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            {error && <p className="error">{error}</p>}

            <label
              htmlFor="department"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Department:
            </label>
            <select
              name="department"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select</option>
              <option value="ece">ECE</option>
              <option value="it">IT</option>
              <option value="cse">CSE</option>
              <option value="aids">AIDS</option>
              <option value="aiml">AIML</option>
              <option value="chemical">Chemical</option>
              <option value="cs">CS</option>
              <option value="eie">EIE</option>
              <option value="eee">EEE</option>
              <option value="ft">FT</option>
              <option value="nat">Naturopathy</option>
              <option value="auto">Automobile</option>
              <option value="civil">Civil</option>
              <option value="mechanical">Mechanical</option>
              <option value="mec">Mechtronics</option>
            </select>

            <label
              htmlFor="curdate"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Date:
            </label>
            <input
              type="date"
              id="curdate"
              value={curdate}
              onChange={(e) => setCurDate(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <label
              htmlFor="day"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Day:
            </label>
            <select
              name="day"
              id="day"
              value={curday}
              onChange={(e) => setCurDay(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select</option>
              <option value="FN">FN</option>
              <option value="AN">AN</option>
            </select>

            <label
              htmlFor="seminarHall"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Seminar Hall:
            </label>
            <select
              name="seminarHall"
              id="seminarHall"
              value={seminarhall}
              onChange={(e) => setSeminarHall(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select</option>
              <option value="Jawaharlal Nehru">Jawaharlal Nehru</option>
              <option value="Tata Seminar Hall">Tata Seminar Hall</option>
              <option value="MBA Seminar Hall">MBA Seminar Hall</option>
              <option value="Sir C.V.Raman Seminar Hall">
                Sir C.V.Raman Seminar Hall
              </option>
              <option value="Ramanujam Seminar Hall">
                Ramanujam Seminar Hall
              </option>
              <option value="Radhakrishnan Seminar Hall">
                Radhakrishnan Seminar Hall
              </option>
              <option value="amakrishna Seminar Hall">
                Ramakrishna Seminar Hall
              </option>
              <option value="Maharaja auditorium">Maharaja auditorium</option>
              <option value="Convention Center">Convention Center</option>
            </select>

            <label
              htmlFor="postContent"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Purpose:
            </label>
            <textarea
              name="purpose"
              id="purpose"
              value={purpose}
              required
              onChange={(e) => setPurpose(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
