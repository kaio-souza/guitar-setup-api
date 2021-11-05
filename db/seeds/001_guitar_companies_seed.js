'use strict'

const {Company} = require('../../server/models')

exports.seed = knex => knex(Company.tableName).del()
    .then(() => [
        {
            name: 'LINE6',
            website: '',
            logo: ''
        },
        {
            name: 'FENDER',
            website: '',
            logo: ''
        },
        {
            name: 'AUSTIN',
            website: '',
            logo: ''
        },
        {
            name: 'SHELTER',
            website: '',
            logo: ''
        },
        {
            name: 'SHELBY',
            website: '',
            logo: ''
        },
        {
            name: 'STRINBERG',
            website: '',
            logo: ''
        },
        {
            name: 'MARTIN',
            website: '',
            logo: ''
        },

        {
            name: 'TAKAMINE',
            website: '',
            logo: ''
        },
        {
            name: 'GIBSON',
            website: '',
            logo: ''
        },
        {
            name: 'BLACKWOOD',
            website: '',
            logo: ''
        },
        {
            name: 'CRAFTER',
            website: '',
            logo: ''
        },
        {
            name: 'WASHBURN',
            website: '',
            logo: ''
        },
        {
            name: 'LYON',
            website: '',
            logo: ''
        },
        {
            name: 'PHX / PHOENIX',
            website: '',
            logo: ''
        },
        {
            name: 'EAGLE',
            website: '',
            logo: ''
        },
        {
            name: 'TAGIMA',
            website: '',
            logo: ''
        },
        {
            name: 'SEIZI',
            website: '',
            logo: ''
        },
        {
            name: 'MEMPHIS',
            website: '',
            logo: ''
        },
        {
            name: 'EPIPHONE',
            website: '',
            logo: ''
        },
        {
            name: 'YAMAHA',
            website: '',
            logo: ''
        },
        {
            name: 'TONANTE',
            website: '',
            logo: ''
        },
        {
            name: 'JENNIFER',
            website: '',
            logo: ''
        },
        {
            name: 'MAGNUS',
            website: '',
            logo: ''
        },
        {
            name: 'LTD',
            website: '',
            logo: ''
        },
        {
            name: 'JACKSON',
            website: '',
            logo: ''
        },
        {
            name: 'CONDOR',
            website: '',
            logo: ''
        },
        {
            name: 'TAYLOR',
            website: '',
            logo: ''
        },
        {
            name: 'ROZINI',
            website: '',
            logo: ''
        },
        {
            name: 'DiGIORGIO',
            website: '',
            logo: ''
        },
        {
            name: 'TOKS',
            website: '',
            logo: ''
        },

    ])
    .then(newInsert => Promise.all(newInsert.map(item => Company.create(item))))
    .catch(err => console.log('err: ', err))




