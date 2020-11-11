const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(express.json({ extended: false }));

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on --> ${port}`));