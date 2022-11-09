import { gql } from '@apollo/client';

export const ADD_CAR = gql`
  mutation Mutation(
    $personId: String!
    $addCarId: String!
    $make: String!
    $year: Int!
    $model: String!
    $price: Float!
  ) {
    addCar(
      personId: $personId
      id: $addCarId
      make: $make
      year: $year
      model: $model
      price: $price
    ) {
      id
      personId
      year
      make
      model
      price
    }
  }
`;
export const GET_CARS = gql`
  {
    cars {
      id
      year
      model
      make
      personId
      price
    }
  }
`;

export const ADD_BUYER = gql`
  mutation Mutation($firstName: String!, $lastName: String!) {
    addBuyer(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;
export const GET_CAR_OF_PEOPLE = gql`
  query FindPerson($findPersonId: String, $personId: String) {
    findCar(personId: $personId) {
      id
      personId
      year
      make
      model
      price
    }
    findPerson(id: $findPersonId) {
      id
      firstName
      lastName
    }
  }
`;
export const GET_PEOPLE = gql`
  {
    people {
      id
      firstName
      lastName
    }
  }
`;
export const REMOVE_BUYER = gql`
  mutation Mutation($removeBuyerId: String!) {
    removeBuyer(id: $removeBuyerId) {
      id
      firstName
      lastName
    }
  }
`;

export const REMOVE_CAR = gql`
  mutation Mutation($removeCarId: String!) {
    removeCar(id: $removeCarId) {
      id
      personId
      year
      make
      model
      price
    }
  }
`;

export const UPDATE_BUYER = gql`
  mutation Mutation(
    $updateBuyerId: String!
    $firstName: String
    $lastName: String
  ) {
    updateBuyer(
      id: $updateBuyerId
      firstName: $firstName
      lastName: $lastName
    ) {
      id
      firstName
      lastName
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation Mutation(
    $updateCarId: String!
    $personId: String!
    $year: Int!
    $make: String!
    $model: String!
    $price: Float!
  ) {
    updateCar(
      id: $updateCarId
      personId: $personId
      year: $year
      make: $make
      model: $model
      price: $price
    ) {
      id
      personId
      year
      make
      model
      price
    }
  }
`;
