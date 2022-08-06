const db = require('../../config/db')
import { zipCodeInterface } from '../../interfaces/zipCode'

module.exports = {
  async newZipcode(_: any,{ data }: { data: zipCodeInterface }) {
    try {
      const [ zipcode ] = await db('zipcodes')
        .insert(data)
        .returning('*')

      return zipcode;
    } catch (error) {
      console.log(error);
    }
  },
  async clearHistory() {
    try {
      await db('zipcodes').delete()
      return "Clear your search history"
    } catch (error) {
      console.log(error);
    }
  }
}