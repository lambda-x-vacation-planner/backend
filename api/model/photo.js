const db = require("../dbConfig");

module.exports = {
  find,
  insert,
  findById,
  remove,
  findByLocation,
  findByUser,
  update,
};

function find() {
  return db("photo");
}

async function insert(photo) {
  return db("photo").insert(photo);
}

function findById(id) {
  return db("photo")
    .where({ id })
    .first();
}

function findByLocation(location) {
  return db("photo")
    .where({ location })
    .first();
}

function findByUser(user_id) {
  return db("photo")
    .where({ user_id })
    .first();
}

function remove(id) {
  return db("photo")
    .where({ id })
    .first()
    .del();
}

function update(id, photo) {
  return db("photo")
    .where({ id })
    .update(photo);
}
