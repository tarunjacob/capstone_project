const controlOrder = require('../controllers/ordersC');
const { exp, Router } = require("express");

const route = Router();

route.get("/report/:start_date/:end_date", controlOrder.report);

module.exports = route;
