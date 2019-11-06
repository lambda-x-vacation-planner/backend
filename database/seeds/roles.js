
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('role').del()
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
        {id: 1, title: 'Admin' , description: 'Admin/Owner'},
        {id: 2, title: 'Host' , description: 'Host of Activities, has privileges to edit higher level things'},
        {id: 3, title: 'Member' , description: 'A regular user'}
      ]);
    });
};
