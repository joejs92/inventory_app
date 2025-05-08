const {Router} = require("express");
const controller = require("../controllers/controller")

const index = Router();

index.get("/", controller.getInventory);
index.delete("/", controller.deleteInventory);

module.exports = index;