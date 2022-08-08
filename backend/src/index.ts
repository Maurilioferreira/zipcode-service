const { ApolloServer, gql } = require('apollo-server')
const resolvers = require('./resolvers')
const { startDb } = require('./config/start')

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
    searchZippopotam(country: String, zip: String): Zipcode
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
    clearHistory: Zipcode
  }
`


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(() => {
  startDb();
  console.log(`Listening in http://localhost:4000`)
})