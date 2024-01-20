import ModelMongoDB from "./productosMongoDB.js"
import ModelFile from "./productosFile.js"
import ModelMem from "./productosMem.js"

class ModelFactory{
    static get(tipo){
        switch(tipo){
            case 'MEM':
                console.log('persistiendo en Memoria')
                return new ModelMem()

            case 'FILE':
                console.log('persistiendo en file system')
                return new ModelFile()

            case 'MONGODB' : 
                console.log('persistiendo en MongoDB')
                return new ModelMongoDB()
            
            default : 
            console.log('persistiendo en Memoria por DEFAULT')
            return new ModelMem()
        }

    }
}

export default ModelFactory
