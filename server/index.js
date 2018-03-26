
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

app.use('/dist', express.static(path.join(process.cwd(), '/dist')));
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => `server listening on port ${port}`)
