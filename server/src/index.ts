import express from 'express';
import mongoose from 'mongoose';

import Debug from './util/debug';
import contact from './routes/contact';

const PORT = 4000;
const app = express();

app.use(express.json());
app.use('/api/contact', contact);

app.listen(PORT, () => {
    Debug.db('Server starting....');
    Debug.db(`Local: http://localhost:${PORT}`);
});

mongoose
    .connect('mongodb://localhost/caviardb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        Debug.db('Connecting to mongodb...');
    })
    .catch((err) => {
        Debug.db('Error connecting to mongodb:\n', err);
    });
