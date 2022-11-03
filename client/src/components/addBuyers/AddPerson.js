import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { gql } from '@apollo/client';

const ADD_BUYER = gql`
  mutation Mutation($firstName: String!, $lastName: String!) {
    addBuyer(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;
const AddPerson = () => {
  const [mutate] = useMutation(ADD_BUYER);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    mutate({
      variables: {
        firstName: firstName,
        lastName: lastName,
      },
      optimisticResponse: {
        addBuyer: {
          id: '1',
          __typename: 'test',
          firstName: firstName,
          lastName: lastName,
        },
      },
    });

    e.target.firstName.value = '';
    e.target.lastName.value = '';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First name</label>
        <input
          type='text'
          id='firstName'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor='lastName'>Last name</label>
        <input
          type='text'
          id='lastName'
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type='submit'> Add Person</button>
      </form>
    </div>
  );
};

export default AddPerson;
