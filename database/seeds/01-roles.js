
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {id: 1, name: 'Dev', description: 'Can Delete users, See all notes, the highest authority'},
        {id: 2, name: 'Admin', description: 'Can Delete Threads, Posts, Activities, can see all expenses, can do everything a host can.'},
        {id: 3, name: 'Host', description: 'Can create activities, can do everything a user can'},
        {id: 4, name: 'Member', description: 'A standard user.'}
      ]);
    });
};
