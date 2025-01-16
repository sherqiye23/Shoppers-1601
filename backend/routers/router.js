const controllerShoppers = require("../controllers/controllers");
const express = require("express")
const route = express.Router()


route.get("/", controllerShoppers.getAllShoppers)
route.get("/:id", controllerShoppers.getById)
route.delete("/:id", controllerShoppers.deleteShopper)
route.post("/", controllerShoppers.postShopper) 
route.put("/:id", controllerShoppers.putShopper) 

module.exports = route