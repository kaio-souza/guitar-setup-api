'use strict'

const {Company} = require('../../server/models')

exports.seed = knex => knex(Company.tableName).del()
    .then(() => [
        {
            name: 'BOSS',
            website: '',
            logo: ''
        },
        {
            name: 'BEHINGER',
            website: '',
            logo: ''
        },
        {
            name: 'ZOOM',
            website: '',
            logo: ''
        },
        {
            name: 'CUCAVE',
            website: '',
            logo: ''
        },
        {
            name: 'JOYO',
            website: '',
            logo: ''
        },
        {
            name: 'MARSHAL',
            website: '',
            logo: ''
        },
        {
            name: 'LANDSCAPE',
            website: '',
            logo: ''
        },
        {
            name: 'BLACKSTAR',
            website: '',
            logo: ''
        },
    ])
    .then(newInsert => Promise.all(newInsert.map(item => Company.create(item))))
    .catch(err => console.log('err: ', err))




