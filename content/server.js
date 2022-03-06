const express = require('express');
const path = require("path")
const server = express();
const port = 3000;

const staticPath = path.join(__dirname, "./web")
server.use(express.static(staticPath))

function keepAlive(){

   server.listen(port, ()=>{console.log("Server is online!")});

}

module.exports = keepAlive;