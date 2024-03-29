const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const port = 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(port, () => console.log(`app listening on port ${port}`));
