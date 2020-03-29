const knex = require('knex')
const config = require('./knexfile')
const { ENVIRONMENT } = require('../config/env')

const connection = knex(config[ENVIRONMENT])

module.exports = connection