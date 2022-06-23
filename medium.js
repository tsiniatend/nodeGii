const fs = require('fs');
let fileContent = fs.readFileSync(`/Users/kesu/Desktop/planets.txt`, 'utf8');
const str = fileContent.toString();
console.log(str);