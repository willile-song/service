const http = require("http");

const fs = require('fs');

const url = require('url');

const querystring = require("querystring");

const hostname = "localhost";

const part = 80;

const service = http.createServer((req, res) => {
    const method = req.method.toLowerCase();
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    if(method == "get") {
        let data = fs.readFileSync("./index.html");
        res.write(data)
    }else if(method == "post") {
        res.on('data', data => {
            console.log(data.toString())
        })
    }
    res.end();
})

service.listen(part, () => {
    console.log(`service is running at http://${hostname}:${part}`)
})