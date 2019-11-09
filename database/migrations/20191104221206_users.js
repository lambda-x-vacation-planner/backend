exports.up = function(knex, promise) {
    return knex.schema.createTable("users", t =>{
        t.increments('id');

        t.datetime('join_date').notNullable().defaultTo(knex.fn.now()); 
        t.string('email');
        t.string('username');
        t.string('name');
        t.string('password');

        t.string('pfp') // profile picture, i am not 100% how we are gonna store the pictures but lets use a string url for now

        // foreign key to role table
        t.integer('role_id')
        .unsigned()
        .references('id').inTable('role')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex, promise) {
      return knex.schema.dropTableIfExists('users')
  };
