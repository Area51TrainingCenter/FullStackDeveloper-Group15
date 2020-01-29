import * as express from "express"
import { UsuarioController } from "../controllers"
import { authenticationPolicy } from "../policies/authentication.policy"
import { authorizationPolicy } from "../policies/authorization.policy"
import { errorsHandler } from "../handlers/errors.handler"

const router = express.Router()
const controller = new UsuarioController()



router.get("/", authenticationPolicy, authorizationPolicy("operador"), errorsHandler.catchAsync(controller.listar))
router.get("/:_id", errorsHandler.catchAsync(controller.detalle))
router.post("/", errorsHandler.catchAsync(controller.insertar))
router.post("/login", errorsHandler.catchAsync(controller.login))
router.put("/:_id", errorsHandler.catchAsync(controller.actualizar))
router.delete("/:_id", errorsHandler.catchAsync(controller.eliminar))

export default router