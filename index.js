class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido,
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return ('Nombre: ${this.nombre}, Apellido: ${this.apellido}')
    }
    addMascota(){
      console.log ('Mascota: ${this.mascota')
    }
    countMascotas(){
        return this.mascotas;
    }
    addBook(){
        return this.libros ('Nombre: nombre, Autor: autor')
        let libros = new Book("Hunger games", "Suzzane Collins")
        }
    getBookNames(){
        return this.libros;
    }
}