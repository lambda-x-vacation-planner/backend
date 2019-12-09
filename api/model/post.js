const db = require('../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove, 
  findByUser,
  findByThreadId
};

function find() {
  return db('post');
};

async function insert(post) {
  return db('post')
  .insert(post);
};

function findById(id) {
  return db('post')
    .where({ id })
    .first();
};

function findByUser(user_id) {
    return db('post')
      .where({ user_id })
      .first();
  };

function findByThreadId(thread_id) {
    return db('post')
      .where({ thread_id })
      .first();
  };

function remove(id) {
  return db('post')
    .where({ id })
    .first()
    .del();
};