const Product = require('../models/Product');
const baseHtml = require('../helpers/baseHtml')
const getProductCards = require("../helpers/productCard");
const newProduct = require('../helpers/newProduct');
const editProduct = require('../helpers/editProduct');
const getProductDetails = require("../helpers/productDetails");

const productController = {
  showProducts: async (req, res) => {
    try {
      const products = await Product.find();
      const productCards = getProductCards(products);
      const containerCards = `<div class="containerCards">${productCards}</div>`;
      const html = baseHtml(containerCards);
      res.send(html);
    } catch (error) {
      console.error(error);
      res.status(500).json("error");
    }
  },
  showProductById: async (req, res, isDashboard = false ) => {
    try {
      const product = await Product.findById(req.params.productId);
      const productDetails = getProductDetails(product, isDashboard);
      const containerCards = `<div class="containerCards">${productDetails}</div>`;
      const html = baseHtml(containerCards);
      res.send(html);
    } catch (error) {
      console.error(error);
      res.status(500).json("error");
    }
  },
  showNewProduct: async (req, res) => {
    try {
      const content = newProduct();
      const html = baseHtml(content);
      res.send(html);
    } catch (error) {
      console.error(error);
      res.status(500).json("error");
    }
  },
  createProduct: async (req, res) => {
    try {
      const { name, description, price, category, size } = req.body;

      const imageUrl = req.file ? req.file.path : null;

      await Product.create({
        name,
        description,
        price,
        category,
        size,
        image: imageUrl,
      });

      res.redirect("/dashboard");
    } catch (error) {
      console.error(error);
      res.status(500).json("error");
    }
  },
  showEditProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      const content = editProduct(product);
      const html = baseHtml(content);
      res.send(html);
    } catch (error) {
      console.error(error);
      res.status(500).json("error");
    }
  },
  updateProduct: async (req, res) => {
    try {
      const updates = { ...req.body };

      if (req.file) {
        updates.image = req.file.path;
      }

      await Product.findByIdAndUpdate(
        req.params.productId,
        updates,
        { new: true },
      );
      res.redirect('/dashboard');
    } catch (error) {
      console.error(error);
      res.status(500).json("error");
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await Product.findByIdAndDelete(productId);

      if (!product) {
        res.status(404).send({ message: "Product not found" });
      }
      res.redirect('/dashboard');
    } catch (error) {
      console.error(error);
      res.status(500).json("error");
    }
  },
};

module.exports = productController;