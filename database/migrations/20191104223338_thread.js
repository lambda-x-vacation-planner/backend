exports.up = function(knex) {
    return knex.schema.createTable('thread', t =>{
        t.increments('id');

        t.string('title', 128);
        t.string('message');

        t.datetime('createdAt'); // use new Date() for our date-times
        t.datetime('updatedAt');

        t.integer('likes');

         // foreign key to user
         t.integer('user_id')
         .unsigned()
         .references('id').inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('thread')
};
