import React from 'react';
import Car from './Car';
const Customer = ({ firstName, lastName, carCollection }) => {
  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>

      {carCollection.map((car) => {
        return <Car {...car} key={car.id} />;
      })}
    </>
  );
};

export default Customer;
