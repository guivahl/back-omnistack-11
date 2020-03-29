const Router = require('koa-router')

const router = new Router()

const IncidentsController = require('../controllers/incidents.controller')

router.get('/incidents', IncidentsController.index)
router.get('/incidents/:id', IncidentsController.show)
router.post('/incidents', IncidentsController.store)
router.put('/incidents/:id', IncidentsController.update)
router.delete('/incidents/:id', IncidentsController.delete)

module.exports = router