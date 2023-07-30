const { error } = require("console");
const fs = require ("fs");
const { json } = require("stream/consumers");
class productManager{
    constructor(path){
        this.path = ('./data.json');
        this.product = [id, title, description, price, thumbnail, code, stock];
        this.id = 1;
    }
 addProduct(newProduct){
    const newProduct = {id, title, description, price, thumbnail, code, stock} = newProduct;
    if(!id || !title || !description ||!price ||!thumbnail ||!code ||!stock){
        throw new Error ("Todos los campos son obligatorios")
    }
    newProduct.id = this.id++
    this.product.push(nuevoProducto);
    console.log('Se agrego un nuevo producto:');
  }
  getProducts(){
    return this.product;
  }
 }

 async crearCarpeta();{
    const existeCarpeta = fs.existsSync('./data');
    return existeCarpeta;
 }

async getProductById(id);{
    try{
        const data = await fs.promises.readFile(`./data/${this.product}`, 'utf-8');
        const product = JSON.parse(data);
        const filtrarProducto = product.filter(prod => prod.id === id);
        return filtrarProducto;
    }catch (error){
        throw new error (error);
    };
}
async deleteProduct(id);{
    try{
        const data = await fs.promises.readFile('./data/${this.product}', 'utf-8');
        const product = JSON.parse(data);
        const nuevoArr = product.filter(prod => prod.id !== id);
        await fs.promises.writeFile(`./data/${this.product}`, JSON.stringify(nuevoArr));
        console.log(`Se elimino el producto con id: ${id}`);
    }catch (error){
        throw new Error(error);
    };
}
const data = new productManager ('./data.json');

data.addProduct = {
    id: "5",
    title: "Remera",
    description: "Violeta",
    price: "500.00",
    thumbnail: "",
    code: "659",
    stock: "10",
}
data.addProduct = {
    id: "6",
    title: "Pantalon",
    description: "Negro",
    price: "2500.00",
    thumbnail: "Sin imagen",
    code: "660",
    stock: "3",
}
data.getProducts();
data.getProductById(660);
data.deleteProduct(659);
