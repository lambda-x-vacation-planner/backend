exports.up = function(knex) {
    return knex.schema.createTable('booking', t =>{
        t.increments('id');
        
        t.datetime('createdAt').defaultTo(knex.fn.now());
        t.datetime('date'); // use new Date() for our date-times

        t.string('name');
        t.string('description');
  
        t.boolean('completed');

         // foreign key to activity
         t.integer('activity_id')
         .unsigned()
         .references('id').inTable('activity')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');

        // foreign key to expense
        t.integer('expense_id')
        .unsigned()
        .references('id').inTable('expense')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('booking')
};
