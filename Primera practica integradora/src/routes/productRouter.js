import {Router} from "express";
import {productManager} from '../services/productManagerFS.js';
import { productManagerDB } from "../services/productManagerDB.js";
import { uploader } from "../utils/multerUtil.js";

const router = Router();
//const ProductManager = new productManager('Products.json');
const ProductManager = new productManagerDB();

router.get('/', async (req, res) => {
    const products = await ProductManager.getAllProducts();
    res.send(products);
});

router.post('/', uploader.array('products', 2), async (req, res) => {
    if (!req.files) {
      req.body.thumbnails = [];
      req.files.forEach((file) =>{
        req.body.thumbnails.push(file.filename);

      });
}
const result = await ProductManager.createProduct(req.body);

    res.send ({
      message: result
    });
});

export default router;