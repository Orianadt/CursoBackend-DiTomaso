const ProductManager = require('../src/ProductManager');
const fs = require('fs');
const express = require ('express');
const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}))
app.get('/product', (req, res) => {
    const {limit} = req.query;
    if (!limit)
    return res.send ({product});
    const productsLimit = products.find (product => product.limit === limit);
    res.send ({productsLimit});
})
app.get('/product/:pid', (req, res) =>{
    const pid = products.filter (product => product.id === pid);
    console.log(`El producto es: ${req.params.pid}`)
})
app.listen(PORT, () =>{
    (PORT) ? console.log('Servidor en el puerto:', PORT) :
    console.log('Fallo el server')
})