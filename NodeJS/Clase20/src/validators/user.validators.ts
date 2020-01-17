import * as Joi from "@hapi/joi"

const esquemas = {
    schemaGetOne: {
        params: Joi.object({
            id: Joi.number()
        })
    },
    schemaInsert: {
        body: Joi.object({
            name: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required()
        })
    },
    schemaUpdate: {
        params: Joi.object({
            id: Joi.number()
        }),
        body: Joi.object({
            name: Joi.string(),
            username: Joi.string(),
            password: Joi.string()
        })
    },
    schemaDelete: {
        params: Joi.object({
            id: Joi.number()
        })
    }
}

export default esquemas