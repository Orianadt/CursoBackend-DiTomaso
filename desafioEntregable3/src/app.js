const express = require('express');
const ProductManager = require("c:/Users/Oriana/Desktop/desafio 3 prueba/src/productManager"); 
const app = express();
const port = 8080; 
const productManager = new ProductManager();

app.get('/products', (req, res) => {
  const { limit } = req.query;
  const products = limit ? productManager.getProducts(parseInt(limit)) : productManager.getAllProducts();
  res.json(products);
});

app.get('/products/:pid', (req, res) => {
  const { pid } = req.params;
  const product = productManager.getProductById(pid);
  if (product) {
    res.json(product);
  } else {
    ({ error: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
