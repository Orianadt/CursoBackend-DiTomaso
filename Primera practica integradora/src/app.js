import express from "express";
import productRouter from './routes/productRouter.js';
import viewsRouter from './routes/viewsRoutes.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import __dirname from './utils.js';
import {Server} from 'socket.io';
const uri = 'mongodb://127.0.0.1:27017/integration';
mongoose.connect(uri);

const app = express();
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('views engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


app.use('/api/product', productRouter);
app.use('/products', viewsRouter);
const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Start server in PORT ${PORT}`);
});

const io = new Server(httpServer);

const messages = [];
io.on('connection', socket => {
    console.log('New client online', socket.id);

    socket.on('message', data => {
        messages.push(data);
        io.emit('messagesLogs', messages);
    });

    socket.on('userConnect', data => {
        socket.emit('messagesLogs', messages);
        socket.broadcast.emit('newUser', data);
    })
});