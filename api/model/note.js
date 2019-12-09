const db = require('../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove, 
  findByUser
};

function find() {
  return db('note');
};

async function insert(note) {
  return db('note')
  .insert(note);
};

function findById(id) {
  return db('note')
    .where({ id })
    .first();
};

function findByUser(user_id) {
    return db('note')
      .where({ user_id })
      .first();
  };

function remove(id) {
  return db('note')
    .where({ id })
    .first()
    .del();
};