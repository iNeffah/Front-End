// Module that gets the values passed to the flags when runing the code in Node.js

function getFlags(flag) {
    const index = process.argv.indexOf(flag) + 1;
    return process.argv[index];
}
module.exports = getFlags;