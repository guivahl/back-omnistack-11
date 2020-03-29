const database = require('../database/connection')

const IncidentController = {
    index: async ctx => {
        const { ong_id, page = 1, limit = 10 } = ctx.query

        const [{ count }] = await database('incidents').count('* as count')

        const incidents = await database('incidents')
            .where(qb => {
                if(ong_id) qb.where({ ong_id })
            })
            .limit(limit)
            .offset((page - 1) * limit)

        ctx.set('X-Total-Count', count)
        ctx.body = incidents
    },
    show: async ctx => {
        const { id } = ctx.params

        const [incident] = await database('incidents')
            .where({ id })

        ctx.body = incident
    },
    store: async ctx => {
        const { title, description, value, ong_id } = ctx.request.body

        const [incident] = await database('incidents')
            .insert({ title, description, value, ong_id })
            .returning('*')

        ctx.body = incident
    },
    update: async ctx => {
        const { title, description, value, ong_id } = ctx.request.body

        const { id } = ctx.params

        const incident =  await database('incidents')
            .where({ id })
            .update({ id, title, description, value, ong_id })
            .returning('*')

        ctx.body = incident
    },
    delete: async ctx => {
        const { id } = ctx.params

        await database('incidents')
            .where({ id })
            .delete()

        ctx.body = { id }
    }
}

module.exports = IncidentController