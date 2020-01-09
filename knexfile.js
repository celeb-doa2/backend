require('dotenv').config();
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.PG_DB,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/'
    },
    seeds: {
      directory: './data/seeds/'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/'
    },
    seeds: {
      directory: './data/seeds/'
    },
    useNullAsDefault: true
  },
  testing: {
    client: 'postgresql',
    connection: {
      database: process.env.PG_TESTING,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/'
    },
    seeds: {
      directory: './data/seeds/'
    },
    useNullAsDefault: true
  }
};
