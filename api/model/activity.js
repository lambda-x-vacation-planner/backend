const db = require('../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove, 
  findByName,
  findByHost,
  findByDestination
};

function find() {
  return db('activity');
};

async function insert(activity) {
  return db('activity')
  .insert(activity);
};

function findById(id) {
  return db('activity')
    .where({ id })
    .first();
};

function findByName(name) {
    return db('activity')
      .where({ name })
      .first();
};

function findByDestination(destination_id) {
    return db('activity')
      .where({ destination_id })
      .first();
};

function findByHost(host) {
    return db('activity')
      .where({ host })
      .first();
};

function remove(id) {
  return db('activity')
    .where({ id })
    .first()
    .del();
};