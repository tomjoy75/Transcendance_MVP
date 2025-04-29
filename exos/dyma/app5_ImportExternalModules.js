// Chercher les modules qui nous interessent : https://nodejs.org/docs/latest/api/
// Ici util.types.isDate(value) dans util
const util = require('util');

console.log(util.types.isDate(123));
console.log(util.types.isDate(new Date("5/2/22")));