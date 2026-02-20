const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();
const upload = require('../middlewares/uploadCloudinaryMiddleware');

router.get('/products', productController.showProducts);

router.get("/products/:productId", (req, res) => {
  productController.showProductById(req, res, false);
});

router.get('/dashboard', productController.showProducts);

router.get('/dashboard/new', productController.showNewProduct);

router.post(
  "/dashboard",
  upload.single("image"),
  productController.createProduct,
);

router.get("/dashboard/:productId", (req, res) => {
  productController.showProductById(req, res, true);
});

router.get('/dashboard/:productId/edit', productController.showEditProduct);

router.put('/dashboard/:productId', upload.single("image"), productController.updateProduct);

router.delete('/dashboard/:productId/delete', productController.deleteProduct);

module.exports = router;