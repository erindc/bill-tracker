import BillsController from './bills_controller'

const routes = (app) => {
    app.post(process.env.API_BASE + "/bills", BillsController.modifyBills);
    app.get(process.env.API_BASE + "/bills", BillsController.loadBills);
};

module.exports = routes;
