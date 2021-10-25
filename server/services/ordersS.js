const repositoryOrder = require('../repositories/ordersR');

exports.report = (start_date, end_date) => {
    return new Promise(async (res, rej) => {
        try {
            const report_id = await repositoryOrder.report(start_date, end_date);
            res(report_id);
        } catch (error) {
            return rej(error);
        }
    })
}