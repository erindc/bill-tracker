const BillsDao = require('./bills_dao');

class BillsController {
    constructor() {
        this.billsDao = new BillsDao()
    }

    modifyBills = async (req, res) => {
        try {
            await this.billsDao.upsertBills(req.body.bills);
            res.sendStatus(201)
        } catch (err) {
            console.log(err);
            this.handleError(500, err)
        }
    };

    loadBills = async (req, res) => {
        try {
            res.status(200).json(await this.billsDao.findByEmail(req.query.userEmailAddress))
        } catch (err) {
            console.log(err);
            this.handleError(500, err);
        }
    };

    handleError = (res, msg) => {
        console.error('ERROR: ' + msg);
        res.status(res).json({error: msg})
    }

}


module.exports = new BillsController();