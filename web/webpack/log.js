const log4js = require('log4js');

log4js.configure({
    appenders: {
        default: {
            type: 'console'
        }
    },
    categories: { default: { appenders: ['default'], level: 'error' } },
    replaceConsole: false
});

module.exports = log4js.getLogger('default');
