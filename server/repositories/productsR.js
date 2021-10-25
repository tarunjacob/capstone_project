const db = require('../db');

exports.checkProductInventory = (product_inventory) => {
    return new Promise((res, rej) => {
        db.query('SELECT inventory_id FROM product_inventory WHERE inventory_id = $1',[product_inventory], (err, results, fields) => {
            if(err){
                err.status= 500;
                return rej(err);
            }

            if(results['rowCount'] == 0) {
                let err = new Error(409);
                err.status = 400;
                err.response = "Product Inventory does not exists";
                return rej(err);
            }
            res();
        });
    });
};

exports.checkProductCategory = (product_category) => {
    return new Promise((res, rej) => {
        db.query('SELECT category_id FROM product_category WHERE category_id = $1',[product_category], (err, results, fields) => {
            if(err){
                err.status= 500;
                return rej(err);
            }

            if(results['rowCount'] == 0) {
                let err = new Error(409);
                err.status = 400;
                err.response = "Product Category does not exists";
                return rej(err);
            }
            res();
        });
    });
};

exports.addProducts = (product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category) => {
    return new Promise((resolve, rej) => {
        db.query('INSERT INTO products (product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING product_id, product_name', [product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category], (err, results, fields) => {
            if(err){
                err.status = 500;
                return rej(err);
            }
        
            if(results){
                let res = {};
                res.product_id = results['rows'][0]['product_id']
                res.product_name = results['rows'][0]['product_name'];
                resolve({"Response":res});
            }
        });
    });
};

exports.updateProducts = (product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category) => {
    return new Promise((resolve, rej) => {
        db.query('UPDATE products SET product_name = $1, product_description = $2, product_price = $3, product_image = $4, product_barcode = $5, product_inventory = $6, product_category = $7  WHERE product_name = $1 RETURNING product_id, product_name', [product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category], (err, results, fields) => {
            if(err){
                err.status(500);
                return rej(err);
            }

            if(results){
                let res = {};
                res.product_id = results['rows'][0]['product_id']
                res.product_name = results['rows'][0]['product_name'];
                resolve({"Response":res});
            }
        });
    });
};

exports.deleteProducts = (product_id) => {
    return new Promise((resolve, rej) => {
        db.query('DELETE FROM products WHERE product_id = $1', [product_id], (err, results, fields) => {
            if(err){
                err.status(500);
                return rej(err);
            }

            if(results){
                resolve({"Response":"Product Deleted"});
            }
        });
    });
};

exports.addProductCategory = (category_name, category_description) => {
    return new Promise((resolve, rej) => {
        db.query('INSERT INTO product_category (category_name, category_description) VALUES ($1, $2) RETURNING category_id, category_name', [category_name, category_description], (err, results, fields) => {
            if(err){
                err.status(500);
                return rej(err);
            }

            if(results){
                let res = {};
                res.category_id = results['rows'][0]['category_id']
                res.category_name = results['rows'][0]['category_name'];
                resolve({"Response":res});
            }
        });
    });
};

exports.updateProductCategory = (category_name, category_description) => {
    return new Promise((resolve, rej) => {
        db.query('UPDATE product_category SET category_name = $1, category_description = $2 WHERE category_name = $1 RETURNING category_id, category_name', [category_name, category_description], (err, results, fields) => {
            if(err){
                err.status(500);
                return rej(err);
            }

            if(results){
                let res = {};
                res.category_id = results['rows'][0]['category_id']
                res.category_name = results['rows'][0]['category_name'];
                resolve({"Response":res});
            }
        });
    });
};

exports.deleteProductCategory = (category_id) => {
    return new Promise((resolve, rej) => {
        db.query('DELETE FROM product_category WHERE category_id = $1', [category_id], (err, results, fields) => {
            if(err){
                err.status(500);
                return rej(err);
            }

            if(results){
                resolve({"Response":"Product Category Deleted"});
            }
        });
    });
};

exports.updateProductInventory = (quantity) => {
    return new Promise((resolve, rej) => {
        db.query('UPDATE product_inventory SET quantity = $1 RETURNING inventory_id', [quantity], (err, results, fields) => {
            if(err){
                err.status(500);
                return rej(err);
            }

            if(results){
                let res = {};
                res.inventory_id = results['rows'][0]['inventory_id']
                resolve({"Response":res});
            }
        });
    });
};

exports.view = () => {
    return new Promise((resolve, rej) => {
        db.query('SELECT product_id, product_name, product_price, product_image from products', (err, results, fields) => {
            if(err){
                err.status(500);
                return rej(err);
            }

            if (results['rowCount'] == 0) {
                let err = new Error(404);
                err.status = 404;
                err.response = "No products found";
                return reject(err);
              }
              resolve(results['rows']);
        });
    });
};

exports.viewCategories = () => {
    return new Promise((resolve, rej) => {
        db.query('SELECT category_id, category_name, category_description, category_photo FROM product_category LIMIT 3', (err, results, fields) => {
            if(err){
                err.status(500);
                return rej(err);
            }

            if (results['rowCount'] == 0) {
                let err = new Error(404);
                err.status = 404;
                err.response = "No Categories found";
                return reject(err);
              }
              resolve(results['rows']);
        });
    });
};

exports.viewByCategory = (category_id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM products WHERE product_category = $1', [category_id], (err, result, _fields) => {
        if (err) {
          err.status = 500;
          return reject(err);
        }
  
        if (result['rowCount'] == 0) {
          let err = new Error(404);
          err.status = 404;
          err.response = "No products found";
          return reject(err);
        }
        resolve({ "Response": result['rows'] });
      });
    });
  };

  exports.viewSpecificProduct = (product_id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM products WHERE product_id = $1', [product_id], (err, result, _fields) => {
        if (err) {
          err.status = 500;
          return reject(err);
        }
  
        if (result['rowCount'] == 0) {
          let err = new Error(404);
          err.status = 404;
          err.response = "No products found";
          return reject(err);
        }
        resolve({ "Response": result['rows'][0] });
      });
    });
  };
  
  exports.viewRecommendation = (uid) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM viewed_products WHERE uid = $1', [uid], (err, result, _fields) => {
        if (err) {
          err.status = 500;
          return reject(err);
        }
  
        if (result['rowCount'] == 0) {
          let err = new Error(404);
          err.status = 404;
          err.response = "No recommendations found";
          return reject(err);
        }
        resolve({ "Response": result['rows'] });
      });
    });
  };

  exports.viewedProducts = (uid, product_id) => {
    return new Promise((resolve, rej) => {
        db.query('INSERT INTO viewed_products (uid, product_id) VALUES ($1, $2) RETURNING uid, product_id', [uid, product_id], (err, results, fields) => {
            if(err){
                err.status(500);
                return rej(err);
            }

            if(results){
                let res = {};
                res.uid = results['rows'][0]['uid']
                res.product_id = results['rows'][0]['product_id'];
                resolve({"Response":res});
            }
        });
    });
};