exports.up = function (knex) {
    return knex.schema.alterTable('celebs', tbl => {
        tbl.string('image_url')
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.alterTable('celebs', tbl => {
        tbl.dropColumn('image_url')
    })
};
