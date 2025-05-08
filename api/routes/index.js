const {Router} = require("express");
const controller = require("../controllers/controller")

const index = Router();

index.get("/", controller.getInventory);
index.delete("/", controller.deleteInventory);
index.post("/", controller.addInventory);

module.exports = index;