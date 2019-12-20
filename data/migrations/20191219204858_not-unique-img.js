exports.up = function (knex) {
    return knex.schema.alterTable('celebs', tbl => {
        tbl.dropColumn('image_url')
    })
};

exports.down = function (knex) {
    return knex.schema.alterTable('celebs', tbl => {
        tbl.dropColumn('image_url')
    })
};
