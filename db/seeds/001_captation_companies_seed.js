'use strict'

const {Company} = require('../../server/models')

exports.seed = knex => knex(Company.tableName).del()
    .then(() => [
        {
            name: 'MALAGOLI',
            website: '',
            logo: ''
        },
        {
            name: 'CABRERA',
            website: '',
            logo: ''
        },
        {
            name: 'SERGIO ROSAR',
            website: '',
            logo: ''
        },
        {
            name: 'SEYMOUR DUNCAN',
            website: '',
            logo: ''
        },

    ])
    .then(newInsert => Promise.all(newInsert.map(item => Company.create(item))))
    .catch(err => console.log('err: ', err))




