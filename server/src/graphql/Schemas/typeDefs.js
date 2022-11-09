import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type Query {
    cars: [Car]
    people: [Person]
    findCar(personId: String): [Car]
    findPerson(id: String): [Person]
  }

  type Mutation {
    addBuyer(id: String, firstName: String!, lastName: String!): Person
    removeBuyer(id: String!): Person
    updateBuyer(id: String!, firstName: String, lastName: String): Person

    addCar(
      personId: String!
      id: String!
      make: String!
      year: Int!
      model: String!
      price: Float!
    ): Car

    removeCar(id: String!): Car

    updateCar(
      id: String!
      personId: String!
      year: Int!
      make: String!
      model: String!
      price: Float!
    ): Car
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
