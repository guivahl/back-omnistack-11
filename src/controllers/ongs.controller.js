const database = require('../database/connection')

const { v4: uuidv4 } = require('uuid')

const IncidentController = {
    index: async ctx => {
        const ongs = await database('ongs')

        ctx.body = ongs
    },
    show: async ctx => {
        const { id } = ctx.params

        const [ong] = await database('ongs')
            .where({ id })

        ctx.body = ong
    },
    store: async ctx => {
        const { name, email, whatsapp, city, uf } = ctx.request.body

        const id = uuidv4()

        const [ong] = await database('ongs')
            .insert({ id, name, email, whatsapp, city, uf })
            .returning('*')

        ctx.body = ong
    },
    update: async ctx => {
        const { name, email, whatsapp, city, uf } = ctx.request.body

        const { id } = ctx.params

        const [ong] = await database('ongs')
            .where({ id })
            .update({ name, email, whatsapp, city, uf })
            .returning('*')

        ctx.body = ong
    },
    delete: async ctx => {
        const { id } = ctx.params

        await database('ongs')
            .where({ id })
            .delete()

        ctx.body = { id }
    }
}

module.exports = IncidentController