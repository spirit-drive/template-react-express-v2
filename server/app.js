import express from 'express';
import path from 'path';

const app = express();

const root = path.join(process.cwd(), 'dist');
app.use(express.static(root));

app.get('*', (req, res) => res.sendFile('index.html', { root }));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
