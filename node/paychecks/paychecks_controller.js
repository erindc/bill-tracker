const PaychecksDao = require('./paychecks_dao');

class PaychecksApi {

    constructor() {
        this.paychecksDao = new PaychecksDao();
    }

    addPaycheck = async (req, res) => {
        try {
            await this.paychecksDao.upsertPaychecks(req.body.paycheck);
            res.sendStatus(201)
        } catch (err) {
            console.log(err);
            this.handleError(500, err)
        }
    };

    getPaycheck = async (req, res) => {
        try {
            res.status(200).json(await this.paychecksDao.getPaycheck(req.body.userEmailAddress));
        } catch (err) {
            console.log(err);
            this.handleError(500, err)
        }
    };

    handleError = (res, msg) => {
        console.error('ERROR: ' + msg);
        res.status(500).json({error: msg});
    }

}

module.exports = new PaychecksApi();