import express from "express";
import routerProducts from './routes/products.js';
import routerCarts from './routes/carts.js';
const app = express();
app.use(express.json ());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', routerProducts);
app.use('/api/carts', routerCarts);
const port = 8080;
app.listen (port, () =>{
    console.log (`Server listening on port ${port}`);
})