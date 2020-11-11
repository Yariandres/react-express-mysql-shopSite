const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
    // const title = req.body.title;
    // const imageUrl = req.body.imageUrl;
    // const price = req.body.price;
    // const description = req.body.description;
    res.send('Got a post request!')
    console.log(req.body.data.title, 'from express');
}