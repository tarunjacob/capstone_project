const serviceOrder = require('../services/ordersS');

exports.report = async (req, res) => {
    const start_date  = req.params.start_date;
    const end_date  = req.params.end_date;

    try {
        const result = await serviceOrder.report(start_date, end_date);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status || 500).send(error);
    }
};