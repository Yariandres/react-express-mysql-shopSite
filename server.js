const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

const app = express();
app.use(cors());

app.use(express.json({ extended: false }));

app.use((req, res, next) => {
    User
    .findByPk(1)
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => console.log(err))
});

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });

const port = process.env.PORT || 5000;
sequelize
    // .sync({ force: true })
    .sync()
    .then(result => {

        return User.findByPk(2)        
    })
    .then(user => {
        if (!user) {
            return User.create({ 
                name: 'Mati', 
                email: 'nati@test.com' 
            })
        }

        return (user);
    })
    .then(user => {

        user.createCart();

    })
    .then(cart => {
        app.listen(port, () => console.log('Server is running on port:', port) );
    })
    .catch(err => console.log(err))