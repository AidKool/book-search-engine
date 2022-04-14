const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookId: ID!
    title: String!
    description: String!
    link: String
    image: String
    authors: [String]
  }

  type User {
    username: String!
    email: String
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userId: ID!, book: Book!): User
    removeBook(book: Book!): User
  }
`;

module.exports = typeDefs;
