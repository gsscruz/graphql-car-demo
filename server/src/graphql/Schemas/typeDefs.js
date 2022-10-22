import { gql } from 'apollo-server-core';
const typeDefs = gql`
  type Query {
    cars: [Car!]!
    people: [Person!]!
  }
  type Person {
    id: String!
    firstName: String!
    lastName: String!
  }

  type Car {
    id: String!
    personId: String!
    year: String!
    make: String!
    model: String!
    price: String!
  }
`;

export default typeDefs;
