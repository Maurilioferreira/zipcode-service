const db = require('./db')
module.exports = {
  async startDb() {
    try {
      await db.raw(`CREATE TABLE IF NOT EXISTS zipcodes (
        id serial4 NOT NULL,
        zip varchar(255) NOT NULL,
        country varchar(255) NOT NULL,
        "countryAbbreviation" varchar(255) NOT NULL,
        places varchar(255) NOT NULL,
        created varchar(255) NOT NULL,
        CONSTRAINT zipcodes_pkey PRIMARY KEY (id)
      )`)
      console.log('table is created')

      return { table: 'created'}
    } catch (error) {
      console.log(error);
    }
  },
}