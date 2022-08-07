import axios from 'axios';
const db = require('../config/db')
import { zipCodeRes } from '../interfaces/zipCode'

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
  },
}
