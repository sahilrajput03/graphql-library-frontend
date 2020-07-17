import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      bookCount
      born
    }
  }
`;

export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      author
      published
    }
  }
`;

// export const CREATE_PERSON = gql`
export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $published: Int, $author: String, $genres: [String]!) {
    addBook(title: $title, published: $published, author: $author, genres: $genres) {
      title
      published
      author
      genres
    }
  }
`;

export const EDIT_AUTHOR = gql`
  mutation editAuth($name: String!, $setBornTo: Int) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
    }
  }
`;

export const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`;
