const db = require('../db');

exports.report = (start_date, end_date) => {
    return new Promise((resolve, rej) => {
        db.query('SELECT order_id, uid, order_status, order_date, order_items FROM orders WHERE order_date BETWEEN $1 AND $2', [start_date, end_date], (err, results, fields) => {
            if(err){
                err.status(500);
                return rej(err);
            }

            if(results){
                resolve({"Response":results['rows'], "Status": 200});
            }
        });
    });
};