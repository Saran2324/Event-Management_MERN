import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownOnMouseOver = () => {
    setShowDropdown(true);
  };

  const hideDropdownOnMouseOut = () => {
    setShowDropdown(false);
  };

  return (
    <div className="dropdown" style={{ position: "absolute" }}>
      <div>
        <button
          onMouseOver={showDropdownOnMouseOver}
          onMouseOut={hideDropdownOnMouseOut}
          className="dropbtn"
          style={{
            backgroundColor: "transparent",

            fontSize: "15px",
            color: showDropdown ? "blue" : "black",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 1)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
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
            minWidth: "150px",
            marginLeft: "0px",
            marginTop: "0px",
            zIndex: "2",
            backgroundColor: "#f9f9f9",
            filter: "brightness(120%)",
            textDecoration: "none",
            fontSize: "14px",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.9)",
            position: "absolute",
          }}
        >
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            Jawaharlal Nehru Seminar Hall
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            TATA Seminar Hall
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            Ramakrishna Seminar Hall
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            Chanakaya Seminar Hall
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            Mahatama Seminar Hall
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            Homi Baba Seminar Hall
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            {" "}
            Ramanujam Seminar Hall
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            Radhakrishna seminar Hall
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            Sir c.v.Raman Seminar Hall
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            Maharaja Auditorium
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            Convention Center
          </Link>
          <Link
            to="/dropcontent"
            style={{
              color: "black",
              textDecoration: "none",
              padding: "8px",
            }}
          >
            Jawaharlal Nehru Seminar Hall
          </Link>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
