import {Router} from "express";
import {productManager} from '../services/productManagerFS.js';


const router = Router();
const ProductManager = new productManager('Products.json');

router.get('/', (req, res) => {
    res.render(
        'index',
        {
            style: 'index.css',
        }
    )
});

export default router;