import React from 'react';
import Customer from './Customer';

const Customers = ({ customersData }) => {
  return (
    <div>
      {customersData.people.map((buyer) => {
        return <Customer key={buyer.id} {...buyer} />;
      })}
    </div>
  );
};

export default Customers;
