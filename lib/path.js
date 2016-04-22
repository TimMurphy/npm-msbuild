'use strict';

// Get full path to msbuild.exe
// todo: expand to use env.MSBUILD_PATH, path & more known locations
module.exports = function path() {
    return '"C:\\Program Files (x86)\\MSBuild\\14.0\\Bin\\MSBuild.exe"';
}
