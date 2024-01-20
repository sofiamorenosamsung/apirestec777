
import express from 'express'
import Controlador  from '../controlador/productos.js'

class Router{
    constructor(){
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start(){
        this.router.get('/:id?' , this.controlador.obtenerProductos )
        this.router.post('/' , this.controlador.guardarProducto)
        this.router.delete('/:id' , this.controlador.borrarProducto)
        this.router.put('/:id' , this.controlador.actualizarProducto)

        return this.router
    }
}
        
//EXPORTACION DEL ROUTER ...
    export default Router