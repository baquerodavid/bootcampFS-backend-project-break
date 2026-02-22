const Product = require('../models/Product');

const productControllerApi = {
  getProducts: async (req, res) => {
    try {
      let products;

      if (!req.query.category) {
        products = await Product.find();
      } else {
        products = await Product.find({ category: req.query.category });
      }
      
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
  createProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
  updateProduct: async(req, res) => {
    try {
      const { productId } = req.params;
      const product = await Product.findByIdAndUpdate(productId, req.body, { new: true });

      if (!product) {
        res.status(404).json({ message: "Product not found" });
      }

      res.json({
        message: 'Product updated successfully',
        product
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await Product.findByIdAndDelete(productId);

      if (!product) {
        res.status(404).json({ message: 'Product not found' });
      }

      res.json({
        message: "Product deleted successfully",
        product
       });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = productControllerApi;