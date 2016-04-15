'use strict';

const shell = require('shelljs');

module.exports = function start() {
    const msbuild = getMSBuildPath();
    const argv = getMSBuildArguments();
    
    const cmd = `${msbuild} ${argv.join(' ')}`;

    console.log(cmd);
    console.log();
        
    shell.exec(cmd);    
};

// Get the arguments to pass to MSBuild.
function getMSBuildArguments() {
    // process.argv.slice(2) is used because:
    //  
    // process.argv[0] is {path}\node.exe so we ignore it.
    // process.argv[1] is {path}\npm-msbuild so we ignore it.
    // process.argv[2 ... n] are the arguments we need to pass msbuild
    return process.argv.slice(2); 
}

// todo: expand to use env.MSBUILD_PATH, path & more known locations
function getMSBuildPath() {
    return '"C:\\Program Files (x86)\\MSBuild\\14.0\\Bin\\MSBuild.exe"';
}
