exports.up = function(knex) {
    return knex.schema.createTable('photo', t =>{
        t.increments();

        t.string('location_url'); // i am not 100% how we are gonna store the pictures but lets use a string url for now
        t.string('name');
        t.string('location');
        t.string('description');

        // foreign key to user who took picture
        t.integer('user_id')
        .unsigned()
        .references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('photo')
};
