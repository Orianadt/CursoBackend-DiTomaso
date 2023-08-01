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
    const {id, title, description, price, thumbnail, code, stock} = newProduct;
    if(!id || !title || !description ||!price ||!thumbnail ||!code ||!stock){
        throw new Error ("Todos los campos son obligatorios")
    }
    newProduct.id = this.id++
    this.product.push(newProduct);
    console.log('Se agrego un nuevo producto:');
  }
  getProducts(){
    return this.product;
  }
  async crearCarpeta(){
    const existeCarpeta = fs.existsSync('./data');
    return existeCarpeta;
 }
 async getProductById(id){
    try{
        const data = await fs.promises.readFile(`./data/${this.product}`, 'utf-8');
        const product = JSON.parse(data);
        const filtrarProducto = product.filter(prod => prod.id === id);
        return filtrarProducto;
    }catch (error){
        throw new error (error);
    };
};
async deleteProduct(id){
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
}
const data = new productManager ('./data.json');

data.addProduct = {
    id: "2",
    title: "Remera",
    description: "Violeta",
    price: "500.00",
    thumbnail: "",
    code: "659",
    stock: "10",
}
data.addProduct = {
    id: "3",
    title: "Pantalon",
    description: "Negro",
    price: "2500.00",
    thumbnail: "Sin imagen",
    code: "660",
    stock: "3",
}
data.addProduct = {
    id: "4",
    title: "Pantalon",
    description: "Verde",
    price: "2500.00",
    thumbnail: "Sin imagen",
    code: "661",
    stock: "5",
}
data.addProduct = {
    id: "5",
    title: "Remera",
    description: "Naranja",
    price: "2500.00",
    thumbnail: "Sin imagen",
    code: "662",
    stock: "15",
}
data.addProduct = {
    id: "6",
    title: "Campera",
    description: "Rosa",
    price: "2500.00",
    thumbnail: "Sin imagen",
    code: "663",
    stock: "11",
}
data.addProduct = {
    id: "7",
    title: "Campera",
    description: "Lila",
    price: "2500.00",
    thumbnail: "Sin imagen",
    code: "664",
    stock: "2",
}
data.addProduct = {
    id: "8",
    title: "Remera",
    description: "Blanca",
    price: "2500.00",
    thumbnail: "Sin imagen",
    code: "665",
    stock: "15",
}
data.addProduct = {
    id: "9",
    title: "Top",
    description: "Plateado",
    price: "2500.00",
    thumbnail: "Sin imagen",
    code: "666",
    stock: "5",
}
data.addProduct = {
    id: "10",
    title: "Pantalon",
    description: "Charol",
    price: "2500.00",
    thumbnail: "Sin imagen",
    code: "667",
    stock: "6",
}
data.addProduct = {
    id: "11",
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
