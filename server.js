const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const shopRoutes = require('./routes/shop');

app.use(express.json({ extended: false }));

app.use('/', shopRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on --> ${port}`));