class Bill {
    constructor(doc) {
        doc._id ? this._id = doc._id : this._id = undefined;
        doc.userEmailAddress ? this.userEmailAddress = doc.userEmailAddress : this.userEmailAddress = undefined;
        doc.catValue ? this.catValue = doc.catValue : this.catValue = undefined;
        doc.name ? this.name = doc.name : this.name = undefined;
        doc.date ? this.date = doc.date : this.date = undefined;
        doc.total ? this.total = doc.total : this.total = undefined;
        doc.splitCheck ? this.splitCheck = doc.splitCheck : this.splitCheck = undefined;
        doc.billId ? this.billId = doc.billId : this.billId = undefined;
        doc.budgetedAmount ? this.budgetedAmount = doc.budgetedAmount : this.budgetedAmount = undefined;
    }
}

module.exports = Bill;