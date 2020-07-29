const http = require("http");

const hostname = "hostname";

const part = 80;

const service = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    res.end("hello world!");
})

service.listen(part, () => {
    console.log(`service is running at http://${hostname}:${part}`)
})