import express from 'express';

const PORT = 4000;
const app = express();

app.get('/api/user', (req, res) => {
    res.send('This is a user!');
});

// eslint-disable-next-line no-console
console.log(PORT);

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Server starting...');
    // eslint-disable-next-line no-console
    console.log(`Local: http://localhost:${PORT}`);
});
