const Router = require('koa-router')

const router = new Router()

const ongsController = require('../controllers/ongs.controller')

router.get('/ongs', ongsController.index)
router.get('/ongs/:id', ongsController.show)
router.post('/ongs', ongsController.store)
router.put('/ongs/:id', ongsController.update)
router.delete('/ongs/:id', ongsController.delete)

module.exports = router