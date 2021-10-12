const repositoryAuth = require('../repositories/authenticationR');

exports.register = (user_name, first_name, last_name, email_address, phone_number, password) => {
    return new Promise(async (res, rej) => {
        
        if(!user_name || !first_name || !last_name || !email_address || !phone_number || !password){
            let err = new Error(400);
            err.status = 400;
            err.response = "One or more fields missing";
            return rej(err)
        }
        try {
            await repositoryAuth.checkEmail(email_address);
            const uid = await repositoryAuth.register(user_name, first_name, last_name, email_address, phone_number, password);
            res(uid);
        } catch (error) {
            return rej(error);
        }
    })
}

exports.login = (email_address, password) => {
    return new Promise(async (res, rej) => {
        if(!email_address || !password){
            let err = new Error(400);
            err.status = 400;
            err.response = "Email and password required";
            return rej(err)
        }
        try {
            const uid = await repositoryAuth.login(email_address, password);
            res(uid);
        } catch (error) {
            return rej(error);
        }
    })
}