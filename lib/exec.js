'use strict';

const shell = require('shelljs');
const cmd = require('./cmd');

// Execute msbuild.exe with passed arguments
module.exports = function exec(args) {
    const result = shell.exec(cmd(args)).code;
    if (result !== 0) {
        console.log();
        console.log(`MSBuild failed. ERRORLEVEL '${result}'.'`)
        process.exit(result);
    }
    console.log('MSBuild successfully completed.');
}
