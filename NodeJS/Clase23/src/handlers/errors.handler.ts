export interface IError extends Error {
    status?: number
}

const errorsHandler = {

    pathNotFound: (req, res, next) => {
        const error: IError = new Error("Path not found")
        error.status = 404

        next(error)
    },

    catchAsync: (ftn: (req, res, next) => Promise<any>) => {
        return (rq, rs, nx) => {
            ftn(rq, rs, nx).catch(error => {
                const err: IError = new Error(error.message)
                err.status = 500
                err.stack = error.stack

                nx(err)
            })
        }
    },

    general: (error, req, res, next) => {
        if (process.env.NODE_ENV === "development") {
            return res
                .status(500)
                .json({
                    status: 500,
                    message: error.message,
                    stack: error.stack
                })
        }

        res
            .status(error.status)
            .json({
                status: error.status,
                message: error.message
            })
    }
}

export { errorsHandler }