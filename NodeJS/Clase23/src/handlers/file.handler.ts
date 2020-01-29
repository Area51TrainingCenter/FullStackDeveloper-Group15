import * as multer from "multer"
import * as uuid from "uuid"
import * as jimp from "jimp"
import * as path from "path"
import { IError } from "./errors.handler"

const fileHandler = {
    uploadToDisk: (field) => {
        const options: any = {}

        const opts: any = {
            destination: (req, file, cb) => {
                cb(null, "./public/images")
            },
            filename(req, file, cb) {
                /*                console.log("file", file)
                               console.log("filename", file.originalname) */
                cb(null, file.originalname)
            }
        }

        options.storage = multer.diskStorage(opts)

        return multer(options).single(field)
    },
    uploadToMemory: (field) => {
        const options = {
            storage: multer.memoryStorage(),
            fileFilter: (req, file, cb) => {
                const esImagen = file.mimetype.startsWith("image/")

                if (esImagen) return cb(null, true)

                const error: IError = new Error("File is not image")
                error.status = 500

                cb(error, false)
            }
        }

        return multer(options).single("field")
    },
    resize: async (req, res, next) => {
        if (!req.file) next()

        const extension = req.file.mimetype.join("/")[1]
        const name = uuid.v4()

        req.body.foto = name + "." + extension

        const foto = await jimp.read(req.file.buffer);
        await foto.resize(200, jimp.AUTO);

        console.log(path.join(__dirname, "../../", "/public/images/", req.body.foto))
        await foto.write(path.join(__dirname, "../../", "/public/images/", req.body.foto));

        next()
    }
}

export { fileHandler }