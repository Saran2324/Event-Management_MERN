import React, { useState } from "react";
import axios from "axios";
import logow from "./logow.png";
import logo3 from "./logo3.png";
function Cancel() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [department, setdepartment] = useState("");
  const [seminarhall, setseminarhall] = useState("");
  const [curdate, setcurdate] = useState("");
  const [curday, setcurday] = useState("");
  const [purpose, setpurpose] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send form data to backend
      const response = await axios.post("http://localhost:8000/cancel", {
        name: name,
        email: email,
        department: department,
        seminarhall: seminarhall,
        curdate: curdate,
        curday: curday,
        purpose: purpose, // Ensure purpose is included in the request body
      });
      // Handle response from the server
      if (response.data === "Booking cancelled successfully") {
        alert("Booking cancelled successfully");
      } else if (response.data === "Booking not found") {
        alert("Booking not found");
      } else {
        alert("Error during booking cancellation.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred during cancellation.", { error }); // Handle error during cancellation
    }
  };

  return (
    <div>
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
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          marginTop: "50px",
          border: "solid",
        }}
      >
        <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
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
          onChange={(e) => setemail(e.target.value)}
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
          onChange={(e) => setdepartment(e.target.value)}
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
          onChange={(e) => setcurdate(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <label htmlFor="day" style={{ display: "block", marginBottom: "5px" }}>
          Day:
        </label>
        <select
          name="day"
          id="day"
          value={curday}
          onChange={(e) => setcurday(e.target.value)}
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
          <option value="FULL DAY">Full Day</option>
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
          onChange={(e) => setseminarhall(e.target.value)}
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
          <option value="Ramanujam Seminar Hall">Ramanujam Seminar Hall</option>
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
          onChange={(e) => setpurpose(e.target.value)}
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
          Cancel now
        </button>
      </form>
    </div>
  );
}
export default Cancel;
