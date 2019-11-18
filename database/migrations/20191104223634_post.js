exports.up = function(knex) {
    return knex.schema.createTable('post', t =>{
        t.increments('id');

        t.string('message');
        
        t.datetime('createdAt').defaultTo(knex.fn.now());
        t.datetime('updatedAt').defaultTo(knex.fn.now());

        t.integer('likes');

         // foreign key to thread post belongs to
         t.integer('thread_id')
         .unsigned()
         .references('id').inTable('thread')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');

         // foreign key to user who made post
         t.integer('user_id')
         .unsigned()
         .references('id').inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('post')
};