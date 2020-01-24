import * as httpCodes from "http-status-codes"

const authorizationPolicy = (...rolesPermitidos) => {
    return (req, res, next) => {
        const roles = res.locals.roles 

        let autorizado = false
    
        rolesPermitidos.forEach(rol => {
            if(roles.indexOf(rol)>-1) autorizado = true
        })

        if(autorizado) return next()
    
        res.status(httpCodes.FORBIDDEN).send("No tiene autorización")
    }
}

/* const authorizationPolicy = (req, res, next) => {
    const roles = res.locals.roles 

    if(roles.indexOf("auditor")>-1) return next()

    res.status(httpCodes.FORBIDDEN).send("No tiene autorización")
} */

export {authorizationPolicy}