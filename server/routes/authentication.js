const controlAuth = require('../controllers/authenticationC');
const { exp, Router } = require("express");

const route = Router();

route.post("/register", controlAuth.register);
route.post("/login", controlAuth.login);
route.post("/logout", controlAuth.logout);

module.exports = route;

