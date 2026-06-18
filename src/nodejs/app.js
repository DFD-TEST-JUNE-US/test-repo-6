const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    // Potential XSS for testing
    res.send('<html><body>User: ' + req.params.id + '</body></html>');
});

app.get('/exec', (req, res) => {
    const { exec } = require('child_process');
    // Potential command injection for testing
    exec(req.query.cmd, (error, stdout) => {
        res.send(stdout);
    });
});

app.listen(3000, () => console.log('Server running'));
