const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  type Zipcode {
    id: ID!
    country: String
    countryAbbreviation: String
    zip: String
    places: [Place]
    created: Date
  }

  type Place {
    placeName: String
    state: String
    stateAbbreviation: String
    longitude: String
    latitude: String
  }

  type Query {
    zipCodeSearch: [Zipcode]
  }
`

const resolvers = {
  Query: {
    zipCodeSearch() {
      return [{
        id: 1,
        country: "United States",
        countryAbbreviation: "US",
        zip: "90210",
        places: [
          {
            placeName: "Beverly Hills",
            longitude: "-118.4065",
            state: "California",
            stateAbbreviation: "CA",
            latitude: "34.0901"
          }
        ],
        created: new Date()
      },
      {
        id: 2,
        country: "United States",
        countryAbbreviation: "US",
        zip: "00210",
        places: [
          {
            placeName: "Portsmouth",
            longitude: "-71.0132",
            state: "New Hampshire",
            stateAbbreviation: "NH",
            latitude: "43.0059"
          }
        ],
        created: new Date()
      }
    ]
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(() => {
  console.log(`Listening in http://localhost:4000`)
})