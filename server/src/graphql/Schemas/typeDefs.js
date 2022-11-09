import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type Query {
    cars: [Car]
    people: [Person]
    filterCars(personId: String): [Car]
    filterPeople(id: String): [Person]
  }

  type Mutation {
    addPerson(id: String, firstName: String!, lastName: String!): Person
    deletePerson(id: String!): Person
    updatePerson(id: String!, firstName: String, lastName: String): Person

    addCar(
      personId: String!
      id: String!
      make: String!
      year: Int!
      model: String!
      price: Float!
    ): Car

    deleteCar(id: String!): Car

    updateCar(
      id: String!
      personId: String!
      year: Int!
      make: String!
      model: String!
      price: Float!
    ): Car
    deleteCars(personId: String!): [Car]
  }
  type Person {
    id: String!
    firstName: String!
    lastName: String!
  }

  type Car {
    id: String!
    personId: String
    year: Int
    make: String
    model: String
    price: Float
  }
`;

export default typeDefs;
