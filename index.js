const Manager = require('./manager.js')
const manager = new Manager()

let product = {
    title: "Samsung Galaxy S22 Ultra",
    price: 140000,
    thumbnail: "https://tienda.personal.com.ar/images/SG_S22_ultra_Negro_min_234476066d.png"
}

// manager.createProduct(product).then(result => console.log(result))
// manager.getAll().then(result => console.log(result))
// manager.getById(1).then(result => console.log(result))
manager.deleteById(2).then(result => console.log(result))
