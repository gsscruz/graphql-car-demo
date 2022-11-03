import { gql } from '@apollo/client';

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
export const GET_CARS = gql`
  {
    cars {
      year
      model
      make
      personId
      price
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

export const ADD_BUYER = gql`
  mutation Mutation($firstName: String!, $lastName: String!) {
    addBuyer(firstName: $firstName, lastName: $lastName) {
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
export const REMOVE_BUYER = gql`
  mutation Mutation($removeBuyerId: ID!) {
    removeBuyer(id: $removeBuyerId) {
      id
      firstName
      lastName
    }
  }
`;

export const REMOVE_CAR = gql`
  mutation Mutation($removeCarId: ID!) {
    removeCar(id: $removeCarId) {
      firstName
      lastName
      id
    }
  }
`;

export const UPDATE_BUYER = gql`
  mutation Mutation(
    $updateBuyerId: ID!
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
    $updateCarId: ID!
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
      firstName
      lastName
    }
  }
`;
