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

async function deleteCategory(category){
  await pool.query("DELETE FROM inventory WHERE inventory.category = (SELECT id FROM categories WHERE categories.category = $1)",[category]);
  await pool.query("DELETE FROM categories WHERE categories.category = $1",[category]);
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function deleteItem(id){
  await pool.query("DELETE FROM inventory WHERE id = $1", [id]);
}

module.exports = {
  getAllInventory,
  getCategoryInventory,
  getAllCategories,
  deleteCategory,
  deleteItem
};