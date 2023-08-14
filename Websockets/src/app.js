import express from "express";
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import path from 'path';
import __dirname from './utils.js';
import routerProducts from './routes/products.js';
import routerCarts from './routes/carts.js';
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'));
app.use('/', viewsRouter);
app.use(express.json ());
app.use(express.urlencoded({extended: true}));
app.use('/api/products', routerProducts);
app.use('/api/carts', routerCarts);

const port = 8080;

app.get('/', (req, res) => {
    const products = [
        {
            "title": "Remera",
            "description": "Rosa",
            "code": 501,
            "stock": 1,
            "category": "Ropa",
            "thumbnails": "[Img1]",
            "status": true
        },
        {
            "title": "Remera",
            "description": "Verde",
            "code": 502,
            "stock": 10,
            "category": "Ropa",
            "thumbnails": "[Img2]",
            "status": true
        }
    ]; 
res.render('home', { products });
});

socketServer.on('connection', socket =>{
    console.log('Nuevo cliente conectado');

    socket.on('productos', products => {
        console.log(products);
    })

    socket.on('addProduct', (newProduct) => {
        io.emit('updateProductList', newProduct);
  });
})

app.listen (port, () =>{
    console.log (`Server listening on port ${port}`);
})

