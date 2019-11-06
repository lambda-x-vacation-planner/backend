exports.up = function(knex) {
    return knex.schema.createTable('trip', t =>{
        t.increments('id');

        t.string('name');
        t.string('location');
        t.string('description');
        t.integer('rating'); // RATE THE TRIP!
        
        t.datetime('start_date'); // use new Date() for our date-times
        t.datetime('end_date');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('trip')
};
