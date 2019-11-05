exports.up = function(knex) {
    return knex.schema.createTable('activity', t =>{
        t.increments();

        t.datetime('start_date'); // use new Date() for our date-times
        t.datetime('end_date');

        t.string('name');
        t.string('description');
        t.string('host');
        t.boolean('pending')
        t.boolean('completed');

         // foreign key to destination
         t.integer('destination_id')
         .unsigned()
         .references('id').inTable('destination')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('activity')
};

// name before change 20191104224846_activity