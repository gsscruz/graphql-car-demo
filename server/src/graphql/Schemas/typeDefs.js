import { gql } from 'apollo-server-core';
const typeDefs = gql`
  type Query {
    cars: [Car!]!
    people: [Person!]!
    buyer(id: ID!): Person
  }

  type Mutation {
    removeBuyer(id: ID!): [Person!]!
  }
  type Person {
    id: ID!
    firstName: String!
    lastName: String!
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
