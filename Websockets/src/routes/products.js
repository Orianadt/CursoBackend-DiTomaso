import express from 'express';
import fs from 'fs';
const router = express.Router();

const products = [];
let nextProductId = 1;

router.get('/', (req,res) =>{
    res.send(products)
});

router.get('/', (req, res) => {
    const { limit } = req.query;
    const limitedProducts = limit ? products.slice(0, limit) : products;
    res.json(limitedProducts);
  });

  router.get('/:pid', (req, res) => {
    const product = products.find(p => p.id == req.params.pid);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send({ error: 'Product not found' });
    }
  });

  router.post('/', (req, res) => {
    const newProduct = {
      id: nextProductId++,
      title: req.body.title,
      description: req.body.description,
      code: req.body.code,
      price: req.body.price,
      status: req.body.status === undefined ? true : req.body.status,
      stock: req.body.stock,
      category: req.body.category,
      thumbnails: req.body.thumbnails || []
    };
    products.push(newProduct);
    res.json(newProduct);
  });

  
router.put('/:pid', (req, res) => {
    const productIndex = products.findIndex(p => p.id == req.params.pid);
    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...req.body,
        id: products[productIndex].id 
      };
      res.json(products[productIndex]);
    } else {
      res.status(404).send({ error: 'Product not found' });
    }
  });
  
  router.delete('/:pid', (req, res) => {
    products = products.filter(p => p.id != req.params.pid);
    res.json({ message: 'Product deleted' });
  });

  export default router;