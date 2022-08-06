const db = require('../../config/db')
import { zipCodeInterface } from '../../interfaces/zipCode'

module.exports = {
  async newZipcode(_: any,{ data }: { data: zipCodeInterface }) {
    const [ zipcode ] = await db('zipcodes')
      .insert(data)
      .returning('*')

    return zipcode;
  },
}