import React from "react";
import logo2 from "./logo2.png";


function LoginForm() {
  const headerStyle = {
    backgroundColor: "white",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 0px",
  };

  const logoStyle = {
    height: "70px",
  };

  const btnStyle = {
    padding: "5px 5px",
    backgroundColor: "hsl(339, 100%, 50%)",
    color: "#fff",
    textDecoration: "none",
    fontSize: "large",
    transition: "background-color 0.3s ease",
    height: "40px",
    width: "100px",
    border: "none",
    marginTop: "20px",
    borderRadius: "10px",
    marginLeft: "500px",
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
  };

  return (
    <>
      <header style={headerStyle}>
        <img
          className="logo"
          src={logo2}
          alt="Company Logo"
          style={logoStyle}
        />
        <button className="btn">
          <a
            href="https://www.kongu.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={btnStyle}
          >
            Contact
          </a>
        </button>
      </header>

      <div id="section1">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          Jawaharlal Nehru Seminar Hall - ECE Department
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 150</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room: not available</li>
            </ul>
          </a>
        </main>
      </div>
      <div id="section2">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          TATA Seminar Hall - AIDS Department
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 300</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room: not available</li>
            </ul>
          </a>
        </main>
      </div>
      <div id="section3">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          Ramakrishna Seminar Hall - Mechtronics Department
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 300</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room: not available</li>
            </ul>
          </a>
        </main>
      </div>

      <div id="section4">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          Chanakaya Seminar Hall - FT and Chemical Department
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 300</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room: not available</li>
            </ul>
          </a>
        </main>
      </div>

      <div id="section5">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          Mahatama Seminar Hall - EEE Department
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 300</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room: not available</li>
            </ul>
          </a>
        </main>
      </div>

      <div id="section6">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          Homi Baba Seminar Hall - EIE Department
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 150</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room: not available</li>
            </ul>
          </a>
        </main>
      </div>

      <div id="section7">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          Ramanujam Seminar Hall - IT Department
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 500</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room:  available</li>
            </ul>
          </a>
        </main>
      </div>

      <div id="section8">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          Radhakrishna seminar Hall - CS Department
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 150</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room: not available</li>
            </ul>
          </a>
        </main>
      </div>

      <div id="section9">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          Sir c.v.Raman Seminar Hall - S&H Department
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 400</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room:  available</li>
            </ul>
          </a>
        </main>
      </div>
      <div id="section10">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          Maharaja Auditorium
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 500</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room:  available</li>
            </ul>
          </a>
        </main>
      </div>

      <div id="section11">
        <h1
          style={{
            fontFamily:
              "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
            marginLeft: "50px",
            color: "rgb(111, 34, 6)",
          }}
        >
          Convention Center
        </h1>
        <main
          style={{
            border: " solid 2px",
            width: "500px",
            marginLeft: "70px",
            backgroundColor: "#387ADF",
          }}
        >
          <a>
            <h3
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                marginLeft: "30px",
              }}
            >
              Availability
            </h3>
            <ul>
              <li>No of seats : 6000</li>
              <li>AC : available</li>
              <li>Projector : available</li>
              <li>Refreshment Room: not available</li>
              <li>Practise Room: available</li>
            </ul>
          </a>
        </main>
      </div>

      <footer
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "20px",
          justifyContent: "center",
          fontFamily:
            'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
          backgroundColor: "bisque",
          height: "40px",
        }}
      >
        <p>Designed by KEC</p>
      </footer>
    </>
  );
}

export default LoginForm;
