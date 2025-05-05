const pool = require("./pool");

async function getAllInventory() {
  const { rows } = await pool.query("SELECT inventory.id, categories.category, name, quantity FROM inventory INNER JOIN categories ON inventory.category = categories.id");
  console.log(rows);
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getCategoryInventory(category) {
  const { rows } = await pool.query("SELECT inventory.id, categories.category, name, quantity FROM inventory INNER JOIN categories ON inventory.category = categories.id WHERE categories.category = $1",[category]);
  return rows; 
}

async function insertUsername(username) {
  await pool.query("INSERT INTO inventory (username) VALUES ($1)", [username]);
}//will need to be redone. I guess I didn't change name values when I copy/pasted.

module.exports = {
  getAllInventory,
  insertUsername,
  getCategoryInventory,
  getAllCategories
};