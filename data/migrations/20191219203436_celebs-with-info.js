exports.up = function (knex) {
    return knex.schema.alterTable('celebs', tbl => {
        tbl.string('info')
            .notNullable()
        tbl.integer('birth')
            .notNullable()
        tbl.integer('death')
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.alterTable('celebs', tbl => {
        tbl.dropColumn('info')
        tbl.dropColumn('birth')
        tbl.dropColumn('death')
    })
};
