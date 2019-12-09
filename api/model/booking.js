const db = require('../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove, 
  findByActivity,
  createExpense,
  findExpense,
  insertExpense,
  updateExpenses
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

function findExpense(){
  return db('expense');
};

async function insertExpense(ex) {
  return db('expense')
  .insert(ex);
};

async function updateExpenses(id, changes) {
  await db("responses")
    .where({ id })
    .update(changes);
  return findById(id);
}