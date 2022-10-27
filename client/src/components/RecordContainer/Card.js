import React from 'react';

const Card = ({ firstName, lastName, year, make, model, price }) => {
  // console.log('Hereis: ', props.dataPeople.people);
  console.log('Foi');
  console.log(firstName);

  return (
    <div>
      {`${firstName} ${lastName}`}
      {/* Year:{year} | Make:{make} | model: {model} | Price: {price} */}
    </div>
  );
};

export default Card;
