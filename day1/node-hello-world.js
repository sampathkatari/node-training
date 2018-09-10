var http = require('http');

const host = '127.0.0.1';

const port = '3000';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end(JSON.stringify({
        id: 1,
        name: 'Sampath'
    }));
})

server.listen(port, host, () => {
    console.log(`Server started on host: ${host} port ${port}`)
})
