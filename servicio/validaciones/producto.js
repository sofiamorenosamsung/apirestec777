//Validaciones de JOI
import Joi from "joi";

const validar = producto =>{
   const productoSchema = Joi.object({
        nombre : Joi.string().min(2).max(20).required(),
        precio: Joi.number().required(),
        stock:  Joi.number().required(),
        marca:  Joi.string().required(),
        categoria:  Joi.string().required(),
        detalles:  Joi.string().required(),
        foto:  Joi.string().required(),
        envio:  Joi.required()
        //descripcion:  Joi.number().required(),
        //edadDesde:  Joi.number().required(),
        //edadHasta:  Joi.number().required(),
    })

    
    //nombre..precio.. stock.. marca,  categoria , detalles , foto, envio , descripcion, edadDesde, edadHasta

    

    const {error} = productoSchema.validate(producto)
    return error
}

export default validar
