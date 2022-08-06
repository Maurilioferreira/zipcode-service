const { ApolloServer, gql } = require('apollo-server')
const resolvers = require('./resolvers')
// const typeDefs = require('./schema')

const typeDefs = gql`
  scalar Date

  type Zipcode {
    id: ID
    country: String
    countryAbbreviation: String
    zip: String
    places: String
    created: Date
  }

  type Query {
    lastFiveSearches: [Zipcode]
  }

  input zipInput {
    country: String!
    countryAbbreviation: String!
    zip: String!
    places: String!
    created: Date!
  }

  type Mutation {
    newZipcode(data: zipInput!): Zipcode!
  }
`


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(() => {
  console.log(`Listening in http://localhost:4000`)
})