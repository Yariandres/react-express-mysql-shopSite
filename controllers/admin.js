const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    Product.create({
        title,
        price,
        imageUrl,
        description,
        userId: '1'
    })
    .then(result => {
        console.log('Product created!')
        res.redirect('admin/products')
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
    
}
