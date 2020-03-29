const Router = require('koa-router')

const ongs = require('./ongs.router')
const incidents = require('./incidents.router')

const router = new Router()

router.use(ongs.routes())
router.use(incidents.routes())

module.exports = router
