import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

// CSS styles
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  tableContainer: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  td: {
    padding: "12px 40px ",
    textAlign: "left",
  },
  tableRow: {
    "&:nth-child(even)": {
      backgroundColor: "#f9f9f9",
    },
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  errorText: {
    color: "red",
  },
};

function Delete() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emailFromUrl = queryParams.get("email");
    if (emailFromUrl) {
      setEmail(emailFromUrl);
    }
  }, [location]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8000/getuserfinal?email=${email}`
      ); // Corrected
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  }, [email]);

  useEffect(() => {
    if (email) {
      fetchData();
    }
  }, [email, fetchData]);

  const handleDelete = async (idToDelete) => {
    try {
      await axios.delete(`http://localhost:8000/deleteuser?id=${idToDelete}`);
      // Filter out the deleted item from the data array
      setData(data.filter((item) => item._id !== idToDelete));
    } catch (error) {
      console.error("Error deleting data:", error);
      setError("An error occurred while deleting data.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Booked Halls</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={styles.errorText}>{error}</p>}
      {data.length === 0 ? (
        <p>No bookings present.</p>
      ) : (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Seminar Hall</th>
                <th>Date</th>
                <th>Day</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} style={styles.tableRow}>
                  <td style={styles.td}>{item.seminarhall}</td>
                  <td style={styles.td}>{item.curdate}</td>
                  <td style={styles.td}>{item.curday}</td>
                  <td style={styles.td}>
                    <button onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Delete;
