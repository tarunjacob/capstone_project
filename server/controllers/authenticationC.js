const serviceAuth = require('../services/authenticationS');

exports.register = async (req, res) => {
    const { user_name, first_name, last_name, email_address, phone_number, password} = req.body;
    try {
        const result = await serviceAuth.register(user_name, first_name, last_name, email_address, phone_number, password);
        res.status(200).send(result);
    } catch (err) {
        res.status(err.status || 500).send(err);
    }
};

exports.login = async (req, res) => {
    const { email_address, password} = req.body;

    try {
        const result = await serviceAuth.login(email_address, password);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status).send(error);
    }
};

exports.logout = (req, res) => {
    req.session.destroy((error) => {
        if(error){
            return res.status(400).send({"Message":" User not logged in"});
        }
        return res.status(200).send({"Message":" Logout Successful"})
    })
};