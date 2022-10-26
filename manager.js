const fs = require('fs')
const pathToFile = './products.json'

class Manager {
    createProduct = async (product) => {
        if (!product.title || !product.price || !product.thumbnail) return {status: "error", message: "missing fields"}
        try {
            if (fs.existsSync(pathToFile)){
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let products = JSON.parse(data)
                let id = products[products.length-1].id+1 
                product.id = id
                products.push(product)
                await fs.promises.writeFile(pathToFile, JSON.stringify(products, null, 2))
                return {status: "success", message: "product created"}
            } else {
                product.id = 1
                await fs.promises.writeFile(pathToFile, JSON.stringify([product], null, 2))
                return {status: "success", message:"product created"}
            }
        } catch(err) {
        return {status: "error", message: err.message}
        }
    }

        getAll = async () => {
            if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            return {status: "success", message: products}
        } else {
            return {status: "error", message: err.message}
        }
    }

        getById = async (id) => {
            if (!id) return {status: "error", message: "id required"}
            if (fs.existsSync(pathToFile)) {
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let products = JSON.parse(data)
                let product = products.find(product => product.id === id)
                if (product) return {status: "success", message: product}
                return {status: "error", message: "product not found"}
        } else {
            return {status: "error", message: err.message}
        }
    }

        deleteById = async (id) => {
            if (!id) return {status: "error", message: "id required"}
            if (fs.existsSync(pathToFile)) {
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let products = JSON.parse(data)
                let newProducts = products.filter(product => product.id !== id)
                await fs.promises.writeFile(pathToFile, JSON.stringify(newProducts, null, 2))
                return {status: "success", message:"user deleted"}
        } else {
            return {status: "error", message: err.message}
        }
        }
}

module.exports = Manager
