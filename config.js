const MODO_PERSISTENCIA = 'MONGODB'      // 'MEM' o 'FILE' o 'MONGODB'

const PORT = process.env.PORT || 8080

const STRCNX ='mongodb+srv://SofiaM:Sofia123@misbases.vvboeih.mongodb.net/?retryWrites=true&w=majority'

//const STRCNX ='mongodb://127.0.0.1'

const BASE ='ecommerce'

export default {
    MODO_PERSISTENCIA,
    PORT,
    STRCNX,
    BASE
}