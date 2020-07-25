'use strict';

// Get full path to msbuild.exe
// todo: expand to use env.MSBUILD_PATH, path & more known locations
module.exports = function path() {
    return '"C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Community\\MSBuild\\15.0\\Bin"';
}
