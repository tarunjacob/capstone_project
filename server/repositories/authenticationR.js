const db = require('../db');
const argon2 = require('argon2');

exports.checkEmail = (email) => {
    return new Promise((res, rej) => {
        db.query('SELECT uid FROM users WHERE email_address = $1',[email], (err, results, fields) => {
            if(err){
                err.status= 500;
                return rej(err);
            }

            if(results['rowCount'] > 0) {
                let err = new Error(409);
                err.status = 400;
                err.response = "User exists";
                return rej(err);
            }
            res();
        });
    });
};

exports.register = (user_name, first_name, last_name, email_address, phone_number, password) => {
    return new Promise((resolve, rej) => {
        argon2.hash(password).then(hashedPassword => {
            db.query('INSERT INTO users (user_name, first_name, last_name, email_address, phone_number, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING uid, first_name, email_address', [user_name, first_name, last_name, email_address, phone_number, hashedPassword], (err, results, fields) => {
                if(err){
                    err.status(500);
                    return rej(err);
                }

                if(results){
                    let res = {};
                    res.uid = results['rows'][0]['uid']
                    res.first_name = results['rows'][0]['first_name'];
                    resolve({"Response":res});
                }
            });
        }).catch((err) => {
            err.status(500);
            return rej(err);
        });
    });
};

exports.login = (email_address, password) => {
    return new Promise((reso, rej) => {
        db.query('SELECT uid, password, first_name FROM users WHERE email_address = $1',[email_address], (err, results, fields) => {
            if(err){
                err.status = 500;
                return rej(err);
            }
            if(results['rowCount'] == 0){
                let err = new Error(409);
                err.status = 409;
                err.response = "Incorrect Email or Password";
                return rej(err);
            }

            const hashedPassword = results['rows'][0]['password'];
            argon2.verify(hashedPassword, password).then(match => {
                if(match){
                    let res = {};
                    res.uid = results['rows'][0]['uid'];
                    res.first_name = results['rows'][0]['first_name'];
                    reso({"Response": res});
                }else{
                    let err = new Error(409);
                    err.status = 409;
                    err.response = "Incorrect Email or Password";
                    return rej(err);
                }
            }).catch(err => {
                err.status = 500;
                return rej(err);
            });
        });
    });
};