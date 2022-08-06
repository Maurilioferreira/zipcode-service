import axios from 'axios';
const db = require('../config/db')
import { zipCodeRes } from '../interfaces/zipCode'
// import { zipCodeInterface } from '../../interfaces/zipCode'

module.exports = {
  async searchZippopotam(parent: any, args: any) {
    const { country, zip } = args;
    if(!country || !zip){
      throw new Error("Insert country and zip code");
    }
   
    try {
      
      const { data }: { data: zipCodeRes } = await axios.get(`http://www.zippopotam.us/${country}/${zip}`)
      const json: string = JSON.stringify(data.places);
      
      const zipcodeInDB = await db('zipcodes')
            .where({ zip })
            .first()
      
      if(zipcodeInDB){
        return zipcodeInDB
      }

      const zipcodeData = {
        country: data.country,
        countryAbbreviation: data['country abbreviation'],
        zip: data['post code'],
        places: json,
        created: new Date
      }

      const [ zipcode ] = await db('zipcodes')
        .insert(zipcodeData)
        .returning('*')

      return zipcode
    } catch (error) {
      console.log(error);
    }
    
  },
  async lastFiveSearches() {
    const zipcode = await db('zipcodes')
            .orderBy('id', 'desc')
            .limit(5)

    console.log(zipcode);
    return zipcode;
  //   return [{
  //     id: 1,
  //     country: "United States",
  //     countryAbbreviation: "US",
  //     zip: "90210",
  //     places: [
  //       {
  //         placeName: "Beverly Hills",
  //         longitude: "-118.4065",
  //         state: "California",
  //         stateAbbreviation: "CA",
  //         latitude: "34.0901"
  //       }
  //     ],
  //     created: new Date()
  //   },
  //   {
  //     id: 2,
  //     country: "United States",
  //     countryAbbreviation: "US",
  //     zip: "00210",
  //     places: [
  //       {
  //         placeName: "Portsmouth",
  //         longitude: "-71.0132",
  //         state: "New Hampshire",
  //         stateAbbreviation: "NH",
  //         latitude: "43.0059"
  //       }
  //     ],
  //     created: new Date()
  //   }
  // ]
  },
}
