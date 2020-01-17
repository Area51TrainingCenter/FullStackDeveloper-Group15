const validacion = esquemas => {
    return async (req, res, next) => {
        if (esquemas["params"]) {
            const result = await esquemas["params"].validate(req.params)
            if (result.error) {
                return res.json(result.error.details)
            }
        }

        if (esquemas["body"]) {
            const result = await esquemas["body"].validate(req.body)
            if (result.error) {
                return res.json(result.error.details)
            }
        }

        if (esquemas["query"]) {
            const result = await esquemas["query"].validate(req.query)
            if (result.error) {
                return res.json(result.error.details)
            }
        }

        if (esquemas["headers"]) {
            const result = await esquemas["headers"].validate(req.headers)
            if (result.error) {
                return res.json(result.error.details)
            }
        }
        next()
    }
}

export default validacion