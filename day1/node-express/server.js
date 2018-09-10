var express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send(JSON.stringify({
        id: 1,
        name: 'Sampath'
    }))
});

app.get('/api', (req, res) => {
    res.send('Say hello')
})

app.get('/api/v1/hello', (req, res) => {
    res.send('API V1')
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});