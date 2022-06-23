const express = require(`express`);
const http = require('http');
let fs = require('fs');
const data = fs.readFileSync('./employees.json');
const dataStr = JSON.parse(data);
const app = express();

function idCheck(res, data, idReq){
    for(let i = 0; i < data.length; i++){
        if(data[i].id === idReq){
            return res.send(data[i]);
        }
    }
    return res.status(404).send("Employee ID Not found")
}

app.get('/employees', (req, res) => {
    res.send(dataStr);
})

app.get('/employee', function (req, res){
    res.status(404).send("Employee ID Not found");
})

app.get('/employees/:id', function(req, res) {
    const idReq = req.params.id;
    console.log(req);
    idCheck(res, dataStr, idReq); 
});
app.listen(3000);