const { Router } = require("express");

const getProduct = require("../handlers/getProduct")
const getProductByID = require("../handlers/getProductByID")
const getPopularProduct = require("../handlers/productsHandler")


const productRouter = Router();


productRouter.get("/", getProduct);

productRouter.get("/:id", getProductByID);

productRouter.get("/popular", getPopularProduct);


module.exports = productRouter;
