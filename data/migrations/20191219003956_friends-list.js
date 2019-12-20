
exports.up = function (knex) {
    return knex.schema.createTable('friends', tbl => {
        tbl.increments()
        tbl.integer('user_id')
            .notNullable()
        tbl.integer('friend_id')
            .notNullable()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('friends');
}