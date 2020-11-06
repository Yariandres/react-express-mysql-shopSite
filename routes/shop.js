const express = require('express');

const router = express.Router('router');

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

module.exports = router;