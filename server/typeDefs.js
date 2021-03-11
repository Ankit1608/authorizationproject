const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
    bye: String
    users: [User!]!
    user(id: ID!): User!
    me: String!
  }
  type User {
    id: ID!
    email: String!
    password: String!
    tokenVersion: Int!
  }
  type LoginResponse {
    accessToken: String!
    user: User!
  }
  type Mutation {
    createUser(email: String!, password: String!): Boolean!
    login(email: String!, password: String!): LoginResponse
    revokeRefreshToken(userId: String!): Boolean!
    logout: Boolean!
  }
`;
module.exports = { typeDefs };
