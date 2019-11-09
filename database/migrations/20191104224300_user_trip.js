// this table is a connection between the user and their trips
exports.up = function(knex) {
    return knex.schema.createTable('user_trip', t =>{
        t.increments('id');

         // foreign key to user
         t.integer('user_id')
         .unsigned()
         .references('id').inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');

         // foreign key to trip
         t.integer('trip_id')
         .unsigned()
         .references('id').inTable('trip')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');

         t.boolean('completed');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_trip')
};
