// this table is a connection between the user and their activities
exports.up = function(knex) {
    return knex.schema.createTable('user_activity', t =>{
        t.increments('id');

         // foreign key to user
         t.integer('user_id')
         .unsigned()
         .references('id').inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');

         // foreign key to activity
         t.integer('activity_id')
         .unsigned()
         .references('id').inTable('activity')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');

        // foreign key to bookings
         t.integer('booking_id')
         .unsigned()
         .references('id').inTable('booking')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');

         t.boolean('completed');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_activity')
};
