import React, { useState } from 'react';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';

export const ADD_CAR = gql`
  mutation Mutation(
    $personId: String!
    $make: String!
    $year: Int!
    $model: String!
    $price: Float!
  ) {
    addCar(
      personId: $personId
      make: $make
      year: $year
      model: $model
      price: $price
    ) {
      firstName
      lastName
      id
      carCollection {
        id
        personId
        year
        make
        model
        price
      }
    }
  }
`;

const AddCar = () => {
  const [model, setModel] = useState('');
  const [year, setYear] = useState(0);
  const [make, setMake] = useState('');
  const [price, setPrice] = useState(0);
  const [personId, setPersonId] = useState('1');
  const [mutate] = useMutation(ADD_CAR);

  function handleCarForm(e) {
    e.preventDefault();
    mutate({
      variables: {
        model,
        year,
        make,
        price,
        personId,
      },
      optimisticResponse: {
        addCar: {
          id: '1',
          __typename: 'test',
          model,
          year,
          make,
          price,
          personId,
        },
      },
    });
  }
  return (
    <form style={{ marginTop: 20 }} onSubmit={handleCarForm}>
      <label htmlFor='model'>Model: </label>
      <input
        id='model'
        type='text'
        onChange={(e) => setModel(e.target.value)}
      />
      <label htmlFor='year'>Year: </label>
      <input id='year' type='text' onChange={(e) => setYear(e.target.value)} />
      <br />
      <label htmlFor='make'>Make: </label>
      <input id='make' type='text' onChange={(e) => setMake(e.target.value)} />
      <label htmlFor='price'>Price: </label>
      <input
        id='price'
        type='text'
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <br />
      <button type='submit'>Add car</button>
    </form>
  );
};

export default AddCar;
