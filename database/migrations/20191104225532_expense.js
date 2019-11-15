exports.up = function(knex) {
    return knex.schema.createTable('expense', t =>{
        t.increments('id');

        t.datetime('createdAt').defaultTo(knex.fn.now());

        t.string('title');
        t.string('description');
        t.integer('amount');
        t.boolean('paid');
        
        // we may need to have a credit card table to save payments!

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('expense')
};
