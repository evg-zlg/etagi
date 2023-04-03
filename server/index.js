const express = require('express');
// const loadData = require('./data/loadFlatsData');
const flatRouter = require('./routes/flat.routes');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json())
app.use('/', flatRouter);
// loadData()

app.listen(PORT, () => console.log(`server started on port ${PORT}`));