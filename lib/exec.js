'use strict';

const shell = require('shelljs');
const cmd = require('./cmd');

// Execute msbuild.exe with passed arguments
module.exports = function exec(args) {
    process.exit(shell.exec(cmd(args)).code);
}
