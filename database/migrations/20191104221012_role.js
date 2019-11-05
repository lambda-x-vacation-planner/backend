exports.up = function(knex, promise) {
    return knex.schema.createTable("role", table =>{
        table.increments();

        table.string('title') // role names
        table.string('description')
    })
  };
  
  exports.down = function(knex, promise) {
      return knex.schema.dropTableIfExists('role')
  };

// name before change 20191104222012_role