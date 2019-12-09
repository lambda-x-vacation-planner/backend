const db = require('../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove, 
  findByUser
};

function find() {
  return db('thread');
};

async function insert(thread) {
  return db('thread')
  .insert(thread);
};

function findById(id) {
  return db('thread')
    .where({ id })
    .first();
};

function findByUser(user_id) {
    return db('thread')
      .where({ user_id })
      .first();
  };

function remove(id) {
  return db('thread')
    .where({ id })
    .first()
    .del();
};