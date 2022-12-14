import { gql } from "@apollo/client";

export const ME = gql`
  query Me {
    me {
      _id
      username
      email
      password
      petCount
      pets {
        _id
        name
        picture
        age
        breed
        gender
        coat
        color
        temperment
        funFact
        disabilities
        allergies
        likes
        likesMe
      }
    }
  }
`;

export const PET = gql`
  query Pet($petId: [String]!) {
    pet(petId: $petId) {
      _id
      name
    }
  }
`;

export const PETS = gql`
  query getPets {
    pets {
      _id
      name
      picture
      age
      breed
      gender
      coat
      color
      temperment
      funFact
      disabilities
      allergies
    }
  }
`;

export const FIND_MATCH = gql`
  query FindMatch($petId: String!) {
    findMatch(petId: $petId) {
      _id
      username
      email
      pets {
        _id
        name
      }
    }
  }
`;
