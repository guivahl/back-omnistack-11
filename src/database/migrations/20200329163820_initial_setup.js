
exports.up = async knex =>
    knex.schema
        .createTable('ongs', table => {
            table.uuid('id').primary()
            table.string('name').notNullable()
            table.string('email').notNullable()
            table.string('whatsapp').notNullable()
            table.string('city').notNullable()
            table.string('uf', 2).notNullable()

        })
        .createTable('incidents', table => {
            table.increments()
            table.string('title').notNullable()
            table.text('description').notNullable()
            table.decimal('value').notNullable()
            table.uuid('ong_id').notNullable()
            table.foreign('ong_id')
                .references('id')
                .inTable('ongs')
        })

exports.down = async knex =>
    knex.schema
        .dropTableIfExists('incidents')
        .dropTableIfExists('ongs')
