// const { gql } = require('apollo-server')

// const typeDefs = gql`
//   scalar Date

//   type Zipcode {
//     id: ID
//     country: String
//     countryAbbreviation: String
//     zip: String
//     places: String
//     created: Date
//   }

//   type Query {
//     lastFiveSearches: [Zipcode]
//   }

//   input zipInput {
//     country: String!
//     countryAbbreviation: String!
//     zip: String!
//     places: String!
//     created: Date!
//   }

//   type Mutation {
//     newZipcode(data: zipInput!): Zipcode!
//   }
// `;

// module.exports = { typeDefs };