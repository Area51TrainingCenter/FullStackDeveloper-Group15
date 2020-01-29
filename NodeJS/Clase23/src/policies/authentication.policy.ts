import * as httpCodes from "http-status-codes"
import { validarToken } from "../services/token.service"

const authenticationPolicy = (req, res, next) => {
    const headers = req.headers

    if(headers.authorization){
        const partesAutorizacion = headers.authorization.split(" ")

        if(partesAutorizacion.length==2) {
            validarToken(partesAutorizacion[1])
                .then(payload => {
                    res.locals.roles = payload.roles
                    next()
                })
                .catch(error => {
                    res.status(httpCodes.UNAUTHORIZED).send("Usuario no autorizado")
                })
        } else {
            res.status(httpCodes.UNAUTHORIZED).send("Usuario no autorizado")
        }
    } else {
        res.status(httpCodes.UNAUTHORIZED).send("Usuario no autorizado")
    }
}

export {authenticationPolicy}