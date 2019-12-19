
exports.up = function (knex) {
    return knex.schema.alterTable('celebs', tbl => {
        tbl.boolean('alive')
            .defaultTo(true)
            .notNullable()
        tbl.string('image_url')
            .unique()
    })
};

exports.down = function (knex) {
    return knex.schema.alterTable('celebs', tbl => {
        tbl.dropColumn('alive')
        tbl.dropColumn('image_url')
    })
};
