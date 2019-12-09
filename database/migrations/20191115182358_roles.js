exports.up = function(knex, promise) {
    return knex.schema.createTable("roles", t =>{
        t.increments('id');
        t.string('name', 16);
        t.string('description', 240)
    })
  };
  
  exports.down = function(knex, promise) {
      return knex.schema.dropTableIfExists('roles')
  };