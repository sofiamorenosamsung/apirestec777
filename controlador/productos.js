
import Servicio from '../servicio/productos.js'

class Controlador{

    constructor(){
        this.servicio = new Servicio()
    }

    // --- FUNCION PARA GET ---------------------------------------
 obtenerProductos = async (req,res)=>{
    const {id} = req.params
    const productos = await this.servicio.obtenerProductos(id)
    res.json(productos)
}

// ---- FUNCION PARA POST --------------------------------------
 guardarProducto = async (req,res)=>{
    try{
     const producto = req.body
     const productoGuardado = await this.servicio.guardarProducto(producto)
     res.json(productoGuardado)
    }
    catch(error){
        res.json({ errMsg : error.message})
    }
}

// --------- FUNCION PARA PUT -------------------------------------------
 actualizarProducto = async (req,res)=>{
    const {id} = req.params
    const producto = req.body
    const productoActualizado = await this.servicio.actualizarProducto(id,producto)
    
    res.json(productoActualizado)
}

// ---------- FUNCION PARA DELETE -------------------------------
 borrarProducto = async (req,res)=>{
    
    const {id} = req.params
    const productoEliminado = await this.servicio.borrarProducto(id)
    res.json(productoEliminado)
}

}

export default Controlador