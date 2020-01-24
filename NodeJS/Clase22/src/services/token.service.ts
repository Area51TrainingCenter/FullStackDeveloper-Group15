import * as jwt from "jwt-simple"
import * as moment from "moment"
import * as yenv from "yenv"

const env = yenv()

const crearToken = (_id: string, roles: string[]) => {
    const payload = {
        iat: moment().unix(),
        exp: moment().add(5, 'minutes').unix(),
        _id,
        roles
    }

    return jwt.encode(payload, env.KEYWORD_SECRET)
}

const validarToken = (token: string):Promise<any> => {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, env.KEYWORD_SECRET)
            resolve(payload)
        } catch (error) {
            reject(error)
        }
    })
}

export {crearToken, validarToken}