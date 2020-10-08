import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    peoples: [People!]!
  }

  type People {
    id: ID!
    name: String!
    area: String!
    gender: String!
    image: String!
  }

  type Mutation {
    createPerson(name: String!, area: String!, gender: String!, image: String!): People!
  }
`;
