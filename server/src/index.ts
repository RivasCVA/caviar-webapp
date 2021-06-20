import express from 'express';
import newsletter from './routes/newsletter';

const PORT = 4000;
const app = express();

app.use(express.json());
app.use('/api/newsletter', newsletter);

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`\nServer starting...\nLocal: http://localhost:${PORT}`);
});
