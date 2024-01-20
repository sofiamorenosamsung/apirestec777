
import express from 'express'
import RouterProductos from './router/productos.js'
import config from './config.js'
import CnxMongoDB from './model/DBMongo.js'

const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({extended : true}))

app.use(express.json())


//------------ DECLARACION DE RUTA ASOCIADA AL ROUTER PARA PRODUCTOS--------------------

app.use('/api/productos' , new RouterProductos().start())

//Tambien podria haber hecho : -----------------------------------------------------------------
//const routerProductos = new RouterProductos().start()
//app.use('/api/productos' , routerProductos)
//------------- Pero el profe dice que queda mejor poner todo ahi mismo en el use, dejo ese....

//  ---------- LISTEN DEL SERVIDOR -----------------------------------------------------
if(config.MODO_PERSISTENCIA == 'MONGODB'){

   await CnxMongoDB.conectar()
}
const PORT = config.PORT

 const server = app.listen(PORT, ()=> console.log(`Servidor  apiRestFul Ecommerce escuchando en http://localhost:${PORT}`))
  
 server.on('error', error => console.log(`Error en servidor : ${error.message}`))

