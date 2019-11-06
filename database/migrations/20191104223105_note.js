exports.up = function(knex) {
    return knex.schema.createTable('note', t =>{
        t.increments('id');

        t.string('note');

         // foreign key to user 
         t.integer('user_id')
         .unsigned()
         .references('id').inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('note')
};
