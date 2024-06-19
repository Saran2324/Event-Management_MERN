import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function SignupForm() {
  const location = useLocation();
  const usernameacc = location.state.username;
  const emaillogin = location.state.email;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8000/getforadmin");
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (idToDelete) => {
    try {
      await axios.delete(`http://localhost:8000/deleteuser?id=${idToDelete}`);
      // Refetch data after deletion
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
      setError("An error occurred while deleting data.");
    }
  };
  const handleApprove = async (dataToPost) => {
    try {
      // Send content to be posted to the other database
      const response = await axios.post(
        "http://localhost:8000/getuserfinal",
        dataToPost
      );

      if (response.data === "Posted to other database successfully") {
        alert("Content posted to other database successfully");
        // Optionally, you can update the UI or take further actions upon successful posting
      } else {
        alert("Error posting content to other database.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while posting content to other database.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "45%",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            margin: "0 auto",
            overflow: "hidden",
            padding: "80px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </div>
        <p>Username: {usernameacc}</p>
        <p>Email: {emaillogin}</p>
      </div>

      <div
        style={{
          width: "45%",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <div style={{ textAlign: "" }}>
          <h1 style={{ marginLeft: "200px" }}>All Bookings</h1>
          {loading && <p>Loading...</p>}
          {error && <p></p>}
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>
                    Email:&nbsp; {item.userEmail}
                    <br />
                    Name: &nbsp; {item.name}
                    <br />
                    SeminarHall:&nbsp; {item.seminarhall}
                    <br />
                    Date:&nbsp; {item.curdate} {item.curday}
                    <br />
                    Purpose:&nbsp; {item.purpose}
                    <br />
                    <br />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <button onClick={() => handleDelete(item._id)}>
                        Reject
                      </button>
                      <button onClick={() => handleApprove(item._id)}>
                        Approve
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
