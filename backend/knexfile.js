// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 module.exports = {
  client: 'postgresql',
  connection: {
    host: 'host.docker.internal',
    port: 5432,
    database: 'postgres',
    user:     'root',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

