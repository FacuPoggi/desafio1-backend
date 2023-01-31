class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(nuevoProducto) {
        // Valido que el producto nuevo este completo y sea correcto para agregarse
        if (toString(nuevoProducto.id).length > 0 && nuevoProducto.title.length > 0 && nuevoProducto.description.length > 0 && toString(nuevoProducto.price).length > 0 && nuevoProducto.thumbnail.length > 0 && nuevoProducto.code.length > 0 && toString(nuevoProducto.stock).length > 0) {
            
            if (this.products.filter(productos => productos.code == nuevoProducto.code).length > 0) {

                console.log("Este producto ya existe");

            }
            else {
                const idAutoincremental = ProductManager.idAutomatico()
                this.products.push({ id: idAutoincremental, ...nuevoProducto });
            }

        } else {
            console.log("Deben completarse todos los campos para que el nuevo porducto sea válido");
        }
    }

    getProduct() {
        return this.products;
    }


    getProductById(id) {
        const findID = producto => producto.id == id
        if (this.products.find(findID)) {
            return this.products.find(findID)
        } else {
            console.log("Product Not Found");
        }
    }
    static idAutomatico() {
        if (!this.idAnterior) {
            this.idAnterior = 1
        }
        else {
            this.idAnterior++
        }
        return this.idAnterior
    }
}



class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

// Declaro la instancia de ProductManager
const productManager = new ProductManager()

const producto1 = new Product("Samsung S20", "Celular Samsung de alta gama", 1000, "https://firebasestorage.googleapis.com/v0/b/electro-shop-67ad8.appspot.com/o/samsung-s20.jpg?alt=media&token=921a4a16-5902-45a7-8988-2b7331e163d3", "aa11", 20)
const producto2 = new Product("Xiaomi Mi-9", "Celular Xiaomi de gama media", 400, "https://firebasestorage.googleapis.com/v0/b/electro-shop-67ad8.appspot.com/o/xiaomi-mi-9.jpg?alt=media&token=83eacc5e-df1d-43d0-81e8-37615787da4b", "aa12", 20)
const producto3 = new Product("Iphone X", "Celular Apple de alta gama", 1000,
    "https://firebasestorage.googleapis.com/v0/b/electro-shop-67ad8.appspot.com/o/iphone-x.jpg?alt=media&token=03cc5f0b-5db6-4b2d-8321-513a70f43294", "aa13", 10)
const producto4 = new Product("Mouse Logitech", "Mouse marca Logitech G502", 500, "https://firebasestorage.googleapis.com/v0/b/electro-shop-67ad8.appspot.com/o/mouse-logitech.jpg?alt=media&token=76519be9-1db0-494e-9370-6d45ec1dc90e", "aa14", 18)
const producto5 = new Product("MacBook", "Laptop marca Apple modelo Mac Air", 2500,
    "https://firebasestorage.googleapis.com/v0/b/electro-shop-67ad8.appspot.com/o/mac-air.jpg?alt=media&token=6baca427-dfd5-4ec5-bbaa-9da1881da99d", "aa15", 5)


// Verifico que funcione el metodo "addProduct" y agrego los productos creados previamente
productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)
productManager.addProduct(producto4)
productManager.addProduct(producto5)

// Consulto por los productos del array
console.log(productManager.getProduct());

// Creo un producto que no sea válido, que este sin todos los campos completos
const productoNoValido = new Product("", "", "", "", "", "")
// Y verifico que tenga todos los campos completos
productManager.addProduct(productoNoValido)

// Creo un "producto" que tenga un mismo id que otro
const productoConMismoID = new Product("s", "s", "s", "s", "aa15", "s")
// Y verifico que no tenga un mismo id que otro
productManager.addProduct(productoConMismoID)

// Compruebo a ver si existe un producto
console.log(productManager.getProductById(2))
// y uno que no exista
console.log(productManager.getProductById(123))