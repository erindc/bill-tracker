const Bill = require('./bill');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

class BillsDao {
    dbName  = 'billTracker';
    colName = 'bills';

    upsertBills = async (bills) =>  {
        try {
            MongoClient.connect(process.env.MONGO_URL, async (err, client) => {
                if (err !== null) {
                    return err;
                } else {
                    const db = client.db(this.dbName);
                    const collection = db.collection(this.colName);

                    bills.forEach((bill) => {
                        try {
                            collection.update({_id: bill.id}, {$set: bill}, {upsert: true});
                        } catch (err) {
                            console.log(err);
                        }
                    });

                    client.close();
                }
                return 'ok';
            })
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    findByEmail = async (email) => {
        try {
            MongoClient.connect(process.env.MONGO_URL, async (err, client) => {
                if (err !== null) {
                    return err;
                } else {
                    const db = client.db(this.dbName);
                    const collection = db.collection(this.colName);

                    collection.find({'userEmailAddress': email}).toArray(async (err, docs) => {
                        if (err !== null) {
                            return err;
                        }
                        else {
                            client.close();
                            return await this.listBills(docs);
                        }
                    })
                }
            })
        } catch (err) {
            console.log(err);
            return(err);
        }
    };

    listBills = (docs) => {
        try {
            let bills = [];

            docs.forEach((doc) => {
                bills.push(new Bill(doc));
            });

            if (bills.length === 0) {
                return null;
            } else {
                return bills;
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    };
}

module.exports = BillsDao;