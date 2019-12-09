const db = require('../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove, 
  findByUserId,
  findByBookingId
};

function find() {
  return db('user_activity');
};

async function insert(activity) {
  return db('user_activity')
  .insert(activity);
};

function findById(id) {
  return db('user_activity')
    .where({ id })
    .first();
};

function findByUserId(user_id) {
    return db('user_activity')
      .where({ user_id })
      .first();
};

function findByBookingId(destination_id) {
    return db('user_activity')
      .where({ destination_id })
      .first();
};


function remove(id) {
  return db('user_activity')
    .where({ id })
    .first()
    .del();
};