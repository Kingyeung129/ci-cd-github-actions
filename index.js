const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, this is your staging environment! For CI/CD github actions testing purposes...');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

