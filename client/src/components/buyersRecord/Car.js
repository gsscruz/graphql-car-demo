import React from 'react';

const Car = ({ model, year, make, price }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      {model}
      <br />
      Year: {year}
      <br />
      Make: {make}
      <br />
      Price:${price}
    </div>
  );
};

export default Car;
