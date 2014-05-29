function Account(balance) {
    this.balance = balance;
}

Account.prototype.printBalance = function () {
    console.log(this.balance);
};

module.exports = Account;