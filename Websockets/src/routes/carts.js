import express from 'express';
import fs from 'fs';
const router = express.Router();
const carts = [];
let nextProductId = 1;

router.post('/', (req, res) => {
    const newCart = {
      id: nextCartId++,
      products: []
    };
    carts.push(newCart);
    res.json(newCart);
  });

  router.get('/:cid', (req, res) => {
    const cart = carts.find(c => c.id == req.params.cid);
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).send({ error: 'Cart not found' });
    }
  });

  router.post('/:cid/product/:pid', (req, res) => {
    const cartIndex = carts.findIndex(c => c.id == req.params.cid);
    const productIndex = carts[cartIndex].products.findIndex(p => p.product == req.params.pid);
  
    if (productIndex !== -1) {
      carts[cartIndex].products[productIndex].quantity++;
    } else {
      carts[cartIndex].products.push({
        product: req.params.pid,
        quantity: 1
      });
    }
    
    res.json(carts[cartIndex]);
  });
  export default router;