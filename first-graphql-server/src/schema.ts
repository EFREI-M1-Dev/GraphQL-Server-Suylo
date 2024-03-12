import gql from "graphql-tag";

export const typeDefs = gql`
   type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
  }
  
  type Author {
    id: ID!
    name: String!
    photo: String
  }
    
  type Query {
    getTracks: [Track!]!
  }
`;