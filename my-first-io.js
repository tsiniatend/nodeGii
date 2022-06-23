const fs = require('fs'); 
let data = (fs.readFileSync(process.argv[2])).toString();
data = data.split('\n').length - 1; 
let sum=0;
for (let i=0;i<data.length;i++){
    if(data[i]==='\n'){
        sum++;
    }
}
console.log(data);

