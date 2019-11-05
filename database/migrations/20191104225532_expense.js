exports.up = function(knex) {
    return knex.schema.createTable('expense', t =>{
        t.increments();

        t.datetime('createdAt'); // use new Date() for our date-times

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

// name before change 20191104230532_expense