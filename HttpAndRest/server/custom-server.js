const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Custom Server');
});

app.get('/cats', (req, res) => {
    res.json([
        {
            name: 'Navcho',
            age: 8
        }, 
        {
            name: 'Garry',
            age: 4
        }
    ])
});

app.listen(3000);