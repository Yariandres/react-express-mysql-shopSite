const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router('router');

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('products', adminController.getProducts)

module.exports = router;