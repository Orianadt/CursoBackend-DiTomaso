class productManager{
    constructor (){
        this.id = 0;
    this.products = [];
}  
addProduct (title, description, price, thumbanil, code, stock) {
const nuevoProducto = {
    id: ++this.id,
    title: ( () => {if (!title == "") {throw "El titulo se encuentra vacío"} return title})(),
    description: ( () => {if (!description == "") {throw "La descripción se encuentra vacía"} return description})(),
    price: ( () => {if (!price == "") {throw "El precio se encuentra vacío"} return price})(),
    thumbnail: ( () => {if (!thumbanil == "") {throw "El thumbnail se encuentra vacío"} return thumbanil})(),
    code: ( () => {if (!code == "") {throw "El código se encuentra vacío"} return code})(),
    stock:( () => {if (!stock == "") {throw "El stock se encuentra vacío"} return stock})(),
}
}


}
products.push(nuevoProducto);

{
getProducts = () => this.nuevoProducto
getProductById = (productID) => this.products.find(nuevoProducto => nuevoProducto.id == productID); {}
}

const ingresarProd = new productManager

//Agregar producto
ingresarProd.addProduct("Remera", "Rosa con brillos", "7500.00", [imgURL],"ffff", "2")