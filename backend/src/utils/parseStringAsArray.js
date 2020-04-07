module.exports = function parseArraysAsString(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim())
}