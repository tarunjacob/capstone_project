const express = require('express');
const session = require('express-session');
const pool = require("./db");

const routeAuth = require('./routes/authentication');
const routeProducts = require('./routes/products');
const routeOrders = require('./routes/orders');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if(req.method == 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use("/auth",routeAuth);
app.use("/products",routeProducts);
app.use("/orders",routeOrders)

app.listen(8000, () => {
  console.log(`Server is running at port 8000.`);
});