const db = require('../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove, 
  findByName
};

function find() {
  return db('destination');
};

async function insert(destination) {
  return db('destination')
  .insert(destination);
};

function findById(id) {
  return db('destination')
    .where({ id })
    .first();
};

function findByName(name) {
    return db('destination')
      .where({ name })
      .first();
};

function remove(id) {
  return db('destination')
    .where({ id })
    .first()
    .del();
};