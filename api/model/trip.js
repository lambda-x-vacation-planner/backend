const db = require('../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove, 
  findByLocation,
  findByName
};

function find() {
  return db('trip');
};

async function insert(trip) {
  return db('trip')
  .insert(trip);
};

function findById(id) {
  return db('trip')
    .where({ id })
    .first();
};

function findByLocation(location) {
    return db('trip')
      .where({ location })
      .first();
};

function findByName(name) {
    return db('trip')
      .where({ name })
      .first();
};

function remove(id) {
  return db('trip')
    .where({ id })
    .first()
    .del();
};