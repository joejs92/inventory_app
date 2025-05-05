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



module.exports = {
  getAllInventory,
  getCategoryInventory,
  getAllCategories
};