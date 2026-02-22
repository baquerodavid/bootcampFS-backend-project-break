const express = require('express');
const router = express.Router();
const productControllerApi = require('../controllers/productControllerApi');

router.get('/products', productControllerApi.getProducts);

router.get('/products/:productId', productControllerApi.getProductById);

router.post('/products', productControllerApi.createProduct);

router.put('/products/:productId', productControllerApi.updateProduct);

router.delete('/products/:productId/delete', productControllerApi.deleteProduct);

module.exports = router;