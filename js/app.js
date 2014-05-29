var accountOverview = require('./modules/account-overview'),
    app = document.getElementById('app');

// this will need to be abstracted out in some way
// maybe some conditionals to check if data is saved for the current user
// but for now, here are your accounts
accountOverview.render(app);