import React, { useEffect } from "react";

function Curdate() {
  useEffect(() => {
    // Get today's date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    // Set the minimum allowed date to today
    document.getElementById("date-input").setAttribute("min", today);
  }, []); // Empty dependency array to run the effect only once after component mounts

  return (
    <div>
      <input type="date" id="date-input" />
    </div>
  );
}

export default Curdate;
