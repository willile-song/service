const http = require("http");

const fs = require('fs');

const hostname = "localhost";

const part = 80;

const service = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    let data = fs.readFileSync("./index.html");
    res.write(data)
    res.end();
})

service.listen(part, () => {
    console.log(`service is running at http://${hostname}:${part}`)
})