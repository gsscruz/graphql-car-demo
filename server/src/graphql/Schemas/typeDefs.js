import { gql } from 'apollo-server-core';
const typeDefs = gql`
  type Query {
    cars: [Car!]!
    people: [Person!]!
    buyer(id: ID!): Person
  }

  type Mutation {
    addBuyer(firstName: String!, lastName: String!): [Person!]!
    removeBuyer(id: ID!): [Person!]!
    updateBuyer(id: ID!, firstName: String, lastName: String): [Person!]!

    addCar(
      personId: String!
      make: String!
      year: Int!
      model: String!
      price: Float!
    ): [Person!]!

    removeCar(id: ID!): [Person!]!

    updateCar(
      id: ID!
      personId: String!
      year: Int!
      make: String!
      model: String!
      price: Float!
    ): [Person!]!
  }
  type Person {
    id: ID!
    firstName: String!
    lastName: String!
    carCollection: [Car]
  }

  type Car {
    id: ID!
    personId: String!
    year: Int!
    make: String!
    model: String!
    price: Float!
  }
`;

export default typeDefs;
