import * as express from "express"
import { UsuarioController } from "../controllers"
import { authenticationPolicy } from "../policies/authentication.policy"
import { authorizationPolicy } from "../policies/authorization.policy"

const router = express.Router()
const controller = new UsuarioController()

router.get("/", authenticationPolicy, authorizationPolicy("operador"), controller.listar)
router.get("/:_id", controller.detalle)
router.post("/", controller.insertar)
router.post("/login", controller.login)
router.put("/:_id", controller.actualizar)
router.delete("/:_id", controller.eliminar)

export default router