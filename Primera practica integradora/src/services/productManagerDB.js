import { productModel } from "../models/productModel.js";

class productManagerDB{
    constructor(file){
        this.file = file;
    }
  
   async getAllProducts() {
        try{
           const products = await productModel.find()
           return products;
        } catch (error) {
            console.error(error.message);
            return [];
        }
    }

    async createProduct(product){
        const {title, description, code, price, status, stock, category, thumbnails} = product;

        if (!title || !description || !code || !price || !stock || !category) {
            return "No se pudo crear el producto";
        }
        const newProduct = {title, description, code, price, status:true, stock, category, thumbnails: thumbnails ?? []}
       
        try {
          const result = await productModel.create(newProduct);
          return "Producto creado";
        } catch (error) {
            console.error(error.message);
            return "No se pudo crear el producto";
        }
    }
}

export {productManagerDB};