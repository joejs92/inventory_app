const {Router} = require("express");
const controller = require("../controllers/controller")

const index = Router();

index.get("/", controller.getUsernames);

module.exports = index;