const express = require('express');

const router = express.Router('router');

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:id', shopController.getProduct);


module.exports = router;