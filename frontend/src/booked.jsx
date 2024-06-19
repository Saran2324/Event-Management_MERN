import React from 'react';

const Booked= () => {
  return (
    <div className="tick" style={tickStyle}>
      <div className="tick-checkmark" style={checkmarkStyle}></div>
    </div>
  );
}

// Define CSS styles as JavaScript objects
const tickStyle = {
  width: '20px',
  height: '20px',
  backgroundColor: '#4caf50', /* Green color */
  borderRadius: '50%',
  position: 'relative',
};

const checkmarkStyle = {
  content: '""',
  position: 'absolute',
};

export default Booked;
