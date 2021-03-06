const path = require('path');
const express = require('express');
const app = express() || 3000;
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up');
});