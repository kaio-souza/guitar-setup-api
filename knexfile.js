'use strict'

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'user',
            password: 'password',
            database: 'database_name'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/db/migrations`
        },
        seeds: {
            directory: `${__dirname}/db/seeds`
        }
    },
    staging: {
        client: 'mysql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
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
        client: 'mysql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
}
