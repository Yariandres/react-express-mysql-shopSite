const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product
        .findAll()
        .then(products => {
            res.json({ products })
        })
        .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
    Product
        .findAll()
        .then(products => {
            res.json({ products })
        })
        .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
    const productId = req.params.id;

    Product
        .findByPk(productId)
        .then(products => {
            res.json({ products })
        })
        .catch(err => console.log(err));
}