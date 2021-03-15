// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const port = process.env.PORT;
const handler = routes.getRequestHandler(app)

const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(port)
})
