const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.json({prod: products})
        })
        .catch(err => console.log(err));


        // try {
        //     const products = Product.findAll();
    
        //     if (!products) return res.status(400).json({msg: 'No products in the database'});
    
        //     res.json(products);
            
        // } catch (err) {
    
        //     console.log(err.message);
    
        //     res.status(500).send('Server Error')
        // } 
}