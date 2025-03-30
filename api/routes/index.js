const {Router} = require("express");
const controller = require("../controllers/controller")

const index = Router();

index.get("/", controller.getInventory);

module.exports = index;