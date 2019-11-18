const db = require('../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove, 
  findByActivity,
  createExpense
};

function find() {
  return db('booking');
};

async function insert(activity) {
  return db('booking')
  .insert(activity);
};

function findById(id) {
  return db('booking')
    .where({ id })
    .first();
};

function findByActivity(activity_id) {
    return db('booking')
      .where({ activity_id })
      .first();
};

function remove(id) {
  return db('booking')
    .where({ id })
    .first()
    .del();
};

async function createExpense(expense) {
    return db('expenses')
    .insert(expense);
  };
  