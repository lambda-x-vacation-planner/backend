exports.up = function(knex, promise) {
    return knex.schema.createTable("users", table =>{
        table.increments();

        table.datetime('join_date'); // on front end when a user is posted use 'new Date()' as our date system
        table.string('email');
        table.string('username');
        table.string('name');
        table.string('password');

        table.string('pfp') // profile picture, i am not 100% how we are gonna store the pictures but lets use a string url for now

        // foreign key to role table
        table.integer('role_id')
        .unsigned()
        .references('id').inTable('role')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex, promise) {
      return knex.schema.dropTableIfExists('users')
  };
