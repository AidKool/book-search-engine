import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const LOGIN = gql`
//   mutation login(email: String!, password: String!) {
//     login(email: $email, password: $password) {
//       token,
//       user {
//         _id,
//         username
//       }
//     }
//   }
// `;

// export const SAVE_BOOK = gql`
//   mutation saveBook(userId: ID!, book: Book!) {
//     saveBook(userId: $userId, book: $book) {
//       _id,
//       username,
//       savedBooks
//     }
//   }
// `;

// export const REMOVE_BOOK = gql`
//   mutation removeBook(book: Book!) {
//     removeBook(book: $book) {
//       _id,
//       username,
//       savedBooks
//     }
//   }
// `;
