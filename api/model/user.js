const db = require('../dbConfig');

module.exports = {
  find, 
  add,
  findById, 
  remove, 
  findByRole,
  findByEmail,
  findByJoinDate,
  findByName,
  findByUsername
};

function find() {
  return db('users');
};

async function add(user) {
  return db('users')
  .insert(user, 'id');
};

function findById(id) {
  return db('users')
    .where({ id })
    .first();
};

function findByEmail(email) {
    return db('users')
      .where({ email })
      .first();
  };

function findByUsername(username) {
    return db('users')
      .where({ username })
      .first();
  };

function findByName(name) {
    return db('users')
      .where({ name })
      .first();
  };

function findByJoinDate(join_date) {
    return db('users')
      .where({ join_date })
      .first();
  };

function findByRole(role_id) {
    return db('users')
      .where({ role_id })
      .first();
  };

function remove(id) {
  return db('users')
    .where({ id })
    .first()
    .del();
};