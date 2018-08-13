const Paycheck = require('./paycheck');


const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

class PaychecksDao {
    dbName  = 'billTracker';
    colName = 'paychecks';

    upsertPaychecks = async (paycheck) => {
        try {
            MongoClient.connect(process.env.MONGO_URL, (err, client) => {
                if (err) {
                    return err;
                } else {
                    const db = client.db(this.dbName);
                    const collection = db.collection(this.colName);

                    collection.update({_id: paycheck.id}, {$set: paycheck}, {upsert: true}, (err, r) => {
                        if (err) {
                            return err;
                        } else {
                            client.close();
                            return r;
                        }
                    });
                }
            })
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    getPaycheck = async (email) => {
        try {
            MongoClient.connect(process.env.MONGO_URL, (err, client) => {
                if (err) {
                    return err;
                } else {
                    const db = client.db(this.dbName);
                    const collection = db.collection(this.colName);

                    collection.find({userEmailAddress: email}).sort({"datetime": -1}, (err, r) => {
                        if (err) {
                            return err;
                        } else {
                            client.close();
                            return r;
                        }
                    }).limit(1);
                }
            })
        } catch (err) {
            console.log(err);
            return err;
        }
    };
}

module.exports = PaychecksDao;