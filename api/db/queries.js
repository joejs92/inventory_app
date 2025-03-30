const pool = require("./pool");

async function getAllInventory() {
  const { rows } = await pool.query("SELECT * FROM inventory");
  return rows;
}

async function getCategoryInventory(category) {
  const { rows } = await pool.query("SELECT * FROM inventory WHERE category = $1",[category]);
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO inventory (username) VALUES ($1)", [username]);
}//will need to be redone.

module.exports = {
  getAllInventory,
  insertUsername,
  getCategoryInventory
};