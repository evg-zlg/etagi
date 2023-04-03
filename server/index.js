const express = require('express');
const cors = require('cors')
// const loadData = require('./data/loadFlatsData');
const flatRouter = require('./routes/flat.routes');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json())
app.use('/', flatRouter);
// loadData()

app.listen(PORT, () => console.log(`server started on port ${PORT}`));