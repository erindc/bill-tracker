const PaychecksController = require('./paychecks_controller');

const routes = (app) => {
    app.post(process.env.API_BASE + "/paycheck", PaychecksController.getPaycheck)
};

module.exports = routes;