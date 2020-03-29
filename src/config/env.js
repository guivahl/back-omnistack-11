const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

module.exports = {
    ENVIRONMENT:  process.env.ENVIRONMENT || 'development',
    DATABASE_HOST: process.env.DATABASE_HOST || '127.0.0.1',
    DATABASE_NAME: process.env.DATABASE_NAME || 'omnistack11',
    DATABASE_USER: process.env.DATABASE_USER || 'root',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'password',
}