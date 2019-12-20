
exports.up = function (knex) {
    return knex.schema.createTable('scores', tbl => {
        tbl.increments()
        tbl.integer('score')
            .notNullable()
        tbl.integer('userID')
            .notNullable()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('scores');
}