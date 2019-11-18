exports.up = function(knex) {
    return knex.schema.createTable('photo', t =>{
        t.increments('id');

        t.text('image');
        t.string('name');
        t.string('location');
        t.string('description');

        t.integer('likes');

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
