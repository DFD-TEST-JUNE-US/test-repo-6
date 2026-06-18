import express, { Request, Response } from 'express';
import { exec } from 'child_process';

const app = express();

app.get('/user/:id', (req: Request, res: Response) => {
    // Potential XSS for testing
    res.send('<html><body>User: ' + req.params.id + '</body></html>');
});

app.get('/run', (req: Request, res: Response) => {
    const cmd = req.query.cmd as string;
    // Potential command injection for testing
    exec(cmd, (error, stdout) => {
        res.send(stdout);
    });
});

app.listen(3000);
