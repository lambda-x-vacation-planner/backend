exports.up = function(knex) {
    return knex.schema.createTable('thread', t =>{
        t.increments('id');

        t.string('title', 128);
        t.string('message');

        t.datetime('createdAt').defaultTo(knex.fn.now());
        t.datetime('updatedAt').defaultTo(knex.fn.now());

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
