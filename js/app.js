var Account = require('./modules/account'),
    toolbar = require('./views/toolbar.jade'),
    myAccount = new Account(1000);

myAccount.printBalance();
console.log(toolbar());
