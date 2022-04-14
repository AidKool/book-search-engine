import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(username: String!, email: String!, password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token,
      user {
        _id,
        name
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login(email: String!, password: String!) {
    login(email: $email, password: $password) {
      token,
      user {
        _id,
        name
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(userId: ID!, book: Book!) {
    saveBook(userId: $userId, book: $book) {
      _id,
      name,
      savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(book: Book!) {
    removeBook(book: $book) {
      id,
      name,
      savedBooks
    }
  }
`;
