const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date
  
  type Query {
    hello: String
    timeDate: Date
  }
`

const resolvers = {
  Query: {
    hello() {
      return 'Good morning'
    },
    timeDate() {
      return new Date
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(() => {
  console.log(`Listening in http://localhost:4000`)
})