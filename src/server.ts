import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/', async () => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

app
  .listen({
    port: 3032,
  })
  .then(() => {
    console.log('listening on port 3032')
  })