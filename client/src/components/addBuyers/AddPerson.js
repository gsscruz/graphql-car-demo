import { useMutation } from '@apollo/client';
import React from 'react';
// import { ADD_BUYER } from '../../graphql/queries';
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);
    mutate({
      variables: {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
      },
      optimisticResponse: {
        addBuyer: {
          id: '1',
          __typename: 'test',
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
        },
      },
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First name</label>
        <input type='text' id='firstName' />
        <label htmlFor='lastName'>Last name</label>
        <input type='text' id='lastName' />
        <button type='submit'> Add Person</button>
      </form>
    </div>
  );
};

export default AddPerson;
