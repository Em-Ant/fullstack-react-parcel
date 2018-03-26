
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(process.cwd(), '/dist')));
app.get('/', (req, res) => res.sendFile(path.join(process.cwd(), '/dist/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => `server listening on port ${port}`)
