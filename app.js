const express = require("express");
const http = require('http');

const app = express();

const server = http.createServer(app);

app.use(express.json());

app.get('/id',async(req,res)=>{
    console.log("req-->",req.hostname)
    return res.status(200).send({
        "check":"done"
    })
})

app.post('/check-port',(req,res)=>{
    console.log("check Port", req.body)
    return res.status(200).send({
        status:'successfull'
    })


})

const PORT = 8080

server.listen(PORT,()=>{
    console.log(`server is running on the ${PORT}`)
})

