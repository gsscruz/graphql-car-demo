import React from 'react';
import Card from './Card';

const RecordContainer = ({ dataPeople, dataCars }) => {
  // console.log('Aqui: ', dataPeople.people);
  console.log(dataCars);
  console.log('Hello world');
  return (
    <>
      {dataPeople.people?.map((singleCard) => {
        return (
          <li key={singleCard.id}>
            <Card
              firstName={singleCard.firstName}
              lastName={singleCard.lastName}
            />
          </li>
        );
      })}
    </>
  );
};

export default RecordContainer;
