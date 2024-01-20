import  fs from 'fs'

class ModelFile{
    constructor(){
        this.nombreArchivo = 'productos.json'
    }

//---- Declaro funciones para leer y escribir el archivo---------------------

 leerArchivo = async nombre =>{
    let productos = []
    try{
        productos = JSON.parse( await fs.promises.readFile(nombre, 'UTF-8'))
    }
    catch{}
    
    return productos
}

 escribirArchivo = async (nombre, productos) =>{
   await  fs.promises.writeFile(nombre, JSON.stringify(productos,null,'\t'))
}

//---Funciones para get de productos ----------------------------

 obtenerProductos = async () =>{
    const productos =  await this.leerArchivo(this.nombreArchivo)
    return productos
}

// .---Funciones para get de un solo producto -----------------------

 obtenerProducto = async id =>{
    const productos =  await this.leerArchivo(this.nombreArchivo)
    return productos.find( p => p.id == id) || {}

}
// ---Funcion para post de producto -------------------------------

 guardarProducto = async producto =>{
            const productos =  await this.leerArchivo(this.nombreArchivo)

            producto.id = String( parseInt(productos[productos.length-1]?.id || 0) +1 )
            if(producto.precio) producto.precio = Number(producto.precio)
            if(producto.stock) producto.stock = parseInt(producto.stock)
            productos.push(producto)

            await this.escribirArchivo(this.nombreArchivo, productos)
            return producto
}

//Funcion para put del producto ----------------------------------

 actualizarProducto = async (id,producto) =>{
   
    const productos =  await this.leerArchivo(this.nombreArchivo)

    producto.id = id
    const index = productos.findIndex( p => p.id == id)

    if(index != -1){
    const productoAnt = productos[index]

    const productoNuevo = {...productoAnt , ...producto}
    
    productos.splice(index, 1 , productoNuevo)
    await this.escribirArchivo(this.nombreArchivo, productos)
    return productoNuevo
   }
    
    else{
        return {}
    }
}

//--- Funcion para el delete del producto ------------------------

 borrarProducto = async id =>{

    const productos =  await this.leerArchivo(this.nombreArchivo)

    let producto = {}
    const index = productos.findIndex(p => p.id == id)
    
    if(index != -1){
     producto = productos.splice(index, 1)[0]
     await this.escribirArchivo(this.nombreArchivo, productos)
    }
    return producto
}
}

export default ModelFile