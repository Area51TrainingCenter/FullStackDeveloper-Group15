import * as express from "express"
import { ClientController } from "../controllers"

const routes = express.Router()
const controller = new ClientController()

routes.get("/", controller.getAll)
routes.get("/:id", controller.getOne)
routes.post("/", controller.insert)
routes.put("/:id", controller.update)
routes.delete("/:id", controller.delete)

export default routes