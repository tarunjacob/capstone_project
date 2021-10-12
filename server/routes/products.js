const controlProduct = require('../controllers/productsC');
const { exp, Router } = require("express");

const route = Router();

route.post("/addProducts", controlProduct.addProducts);
route.put("/updateProducts", controlProduct.updateProducts);
route.delete("/deleteProducts/:product_id", controlProduct.deleteProducts);
route.post("/addProductCategory", controlProduct.addProductCategory);
route.put("/updateProductCategory", controlProduct.updateProductCategory);
route.delete("/deleteProductCategory/:category_id", controlProduct.deleteProductCategory);
route.put("/updateProductInventory", controlProduct.updateProductInventory);
route.get("/view", controlProduct.view);
route.get("/viewByCategory/:category_id", controlProduct.viewByCategory);
route.get("/viewRecommendation/:uid", controlProduct.viewRecommendation);
route.post("/viewedProducts", controlProduct.viewedProducts);

module.exports = route;
