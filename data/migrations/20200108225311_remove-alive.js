exports.up = function (knex) {
    return knex.schema.alterTable('celebs', tbl => {
        tbl.dropColumn('alive')
    })
};

exports.down = function (knex) {
    return knex.schema.alterTable('celebs', tbl => {
        tbl.boolean('alive')
            .defaultTo(true)
            .notNullable()
    })
};
