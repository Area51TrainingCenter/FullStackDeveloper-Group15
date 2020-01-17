import * as express from "express"
import { UserController } from "../controllers"
import { validacion, esquemasUser } from "../validators"

const routes = express.Router()
const controller = new UserController()

routes.get("/", controller.getAll)
routes.get("/detail", controller.detailMetaData)
routes.get("/:id", validacion(esquemasUser.schemaGetOne), controller.getOne)
routes.post("/", validacion(esquemasUser.schemaInsert), controller.insert)
routes.put("/:id", validacion(esquemasUser.schemaUpdate), controller.update)
routes.delete("/:id", validacion(esquemasUser.schemaDelete), controller.delete)

export default routes