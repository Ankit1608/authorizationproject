import { gql } from "@apollo/client";

const check = gql`
  query {
    hello
  }
`;
const bye = gql`
  query {
    bye
  }
`;
const users = gql`
  query {
    users {
      id
      email
    }
  }
`;
const register = gql`
  mutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password)
  }
`;

const login = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      user {
        id
        email
      }
    }
  }
`;
const logout = gql`
  mutation {
    logout
  }
`;

export { check, register, users, login, bye, logout };
