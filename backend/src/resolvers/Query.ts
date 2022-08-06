
module.exports = {
  lastFiveSearches() {
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
