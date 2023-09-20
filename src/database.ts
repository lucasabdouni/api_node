import { knex as setupNex } from 'knex'

export const knex = setupNex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
