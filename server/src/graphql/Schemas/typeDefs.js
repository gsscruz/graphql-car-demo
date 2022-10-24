import { gql } from 'apollo-server-core';
const typeDefs = gql`
  type Query {
    cars: [Car!]!
    people: [Person!]!
    buyer(id: ID!): Person
  }

  type Mutation {
    removeBuyer(id: ID!): [Person!]!

    removeCar(id: ID!): [Person!]!

    addBuyer(firstName: String!, lastName: String!): [Person!]!

    addCar(
      personId: String!
      make: String!
      year: String!
      model: String!
      price: String!
    ): [Person!]!

    updateBuyer(id: ID!, firstName: String, lastName: String): [Person!]!

    updateCar(
      id: ID!
      personId: String!
      year: String!
      make: String!
      model: String!
      price: String!
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
    year: String!
    make: String!
    model: String!
    price: String!
  }
`;

export default typeDefs;
