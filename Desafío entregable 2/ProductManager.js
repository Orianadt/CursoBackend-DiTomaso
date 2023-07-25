const { error } = require("console");
const fs = require ("fs");
const { json } = require("stream/consumers");
class productManager{
    constructor(){
        this.path = []
        this.product = [id, title, description, price, thumbnail, code, stock];
        this.id = 1;
    }
 addProduct(nuevoProducto){
    const nuevoProducto = [id, title, description, price, thumbnail, code, stock];
    nuevoProducto.id = this.id++
    this.product.push(nuevoProducto);
    console.log('Se agrego un nuevo producto:');
  }
  getProducts(){
    return this.product;
  }
 }

 async crearCarpeta();{
    const existeCarpeta = fs.existsSync('./data');
 }

async getProductById(id);{
    try{
        const data = await fs.promises.readFile('./data/${this.product}', 'utf-8');
        const product = JSON.parse(data);
        const filtrarProducto = product.filter(prod => prod.id === id);
        return console.log('Product - ${id}: ${filtrarProducto}');
    }catch (error){
        throw new error (error);
    };
}
async deleteProduct(id);{
    try{
        const data = await fs.promises.readFile('./data/${this.product}', 'utf-8');
        const product = JSON.parse(data);
        const nuevoArr = productos.filter(prod => prod.id !== id);
        await fs.promises.writeFile('./data/${this.product}', JSON.stringify(nuevoArr));
        console.log('Se elimino el producto con id: ${id}');
    }catch (error){
        throw new Error(error);
    };
}