const http = require("http");
const axios = require('axios');

const hostname = "localhost";

const url = 'http://rap2api.taobao.org/app/mock/245055/react/project/data';

const part = 80;

const service = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    axios.get(url).then(resp => {
        console.log(resp.data.data)
    })
    res.end("hello world!");
})

service.listen(part, () => {
    console.log(`service is running at http://${hostname}:${part}`)
})