// Update with your config settings.
require('dotenv').config()

const localPg = {
  host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
}

const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {

  development: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
			directory: 'database/migrations'
		},
		seeds: {
			directory: 'database/seeds'
		}
  },

  staging: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
			directory: 'database/migrations'
		},
		seeds: {
			directory: 'database/seeds'
		},
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  testing: {
    client: 'pg',
    connection: dbConnection,
    useNullAsDefault: true,
    migrations: {
      directory: 'database/migrations',
    },
    seeds: {
      directory: 'database/seeds'
    }
  }

};
