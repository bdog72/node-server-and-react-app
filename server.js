const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1,
            username: '3001 port working'
        },
        {
            id: 2,
            username: 'Bdog'
        }
    ]);
});

app.get('/api/cars', (req, res) => {
    res.json([
        {
            id: 1,
            username: 'Mazda'
        },
        {
            id: 2,
            username: 'Ford'
        }
    ]);
});

const port = process.env.PORT || 3001;

app.listen(port);
