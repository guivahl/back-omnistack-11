const Koa = require('koa')
const koaBody = require('koa-body')
const Cors = require('@koa/cors')

const routes = require('./routes/index')

const app = new Koa()

app.use(koaBody())
app.use(
  Cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH']
  })
)

app.use(routes.routes())

app.listen(3333, console.log('Listen on port 3333!'))