exports.up = function(knex) {
    return knex.schema.createTable('destination', t =>{
        t.increments('id');

        t.string('name');
        t.string('description');
        t.string('location');
        t.integer('longitude');
        t.integer('latitude');
        t.datetime('arrival_date'); // use new Date() for our date-times
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('destination')
};
