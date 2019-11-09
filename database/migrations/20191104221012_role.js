exports.up = function(knex, promise) {
    return knex.schema.createTable("role", t =>{
        t.increments('id');

        t.string('title') // role names
        t.string('description')
    })
  };
  
  exports.down = function(knex, promise) {
      return knex.schema.dropTableIfExists('role')
  };