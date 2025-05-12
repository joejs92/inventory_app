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

async function deleteItem(id, category){
  await pool.query("DELETE FROM inventory WHERE id = $1", [id]);
  const { rows } = await pool.query("SELECT inventory.id, categories.category, name, quantity FROM inventory INNER JOIN categories ON inventory.category = categories.id WHERE categories.category = $1",[category]);
  return rows;
}

async function addCategory(category){
  await pool.query("INSERT INTO categories (category) VALUES ($1)",[category]);
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function addItem(category, name, quantity){
  await pool.query("INSERT INTO inventory (category, name, quantity) VALUES ((SELECT id FROM categories WHERE categories.category = $1), $2, $3)",[category,name,quantity]);
  const { rows } = await pool.query("SELECT inventory.id, categories.category, name, quantity FROM inventory INNER JOIN categories ON inventory.category = categories.id WHERE categories.category = $1",[category]);
  return rows;  
}

async function changeQuant(category, id, quantity){
  await pool.query("UPDATE inventory SET quantity = $1 WHERE id = $2", [quantity, id]);
  const { rows } = await pool.query("SELECT inventory.id, categories.category, name, quantity FROM inventory INNER JOIN categories ON inventory.category = categories.id WHERE categories.category = $1",[category]);
  return rows;
}

module.exports = {
  getAllInventory,
  getCategoryInventory,
  getAllCategories,
  deleteCategory,
  deleteItem,
  addCategory,
  addItem, 
  changeQuant
};