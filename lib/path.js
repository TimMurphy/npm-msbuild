'use strict';

const fs = require('fs');

// Get full path to msbuild.exe
module.exports = function path() {

    let paths = [
        'C:\\Program Files\\Microsoft Visual Studio\\2022\\Community\\MSBuild\\Current\\Bin\\msbuild.exe',
        'C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Community\\MSBuild\\Current\\Bin\\msbuild.exe',
        'C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Community\\MSBuild\\15.0\\Bin\\msbuild.exe'
    ];

    for (let i = 0; i < paths.length; i++) {
        if (fs.existsSync(paths[i])) {
            return '"' + paths[i] + '"';
        }
    }
    
    throw 'msbuild.exe not found.';
}
