class Paycheck {
    constructor(doc) {
        doc._id ? this._id = doc._id : this._id = undefined;
        doc.userEmailAddress ? this.userEmailAddress = doc.userEmailAddress : this.userEmailAddress = undefined;
        doc.amount ? this.amount = doc.amount : this.amount = undefined;
        doc.date ? this.date = doc.date : this.date = undefined;
    }
}

module.exports = Paycheck;