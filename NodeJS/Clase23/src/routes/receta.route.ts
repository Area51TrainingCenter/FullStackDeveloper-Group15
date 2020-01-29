import * as express from "express"
import { RecetaController } from "../controllers"

const router = express.Router()
const controller = new RecetaController()

router.get("/", controller.listar)
router.get("/:_id", controller.detalle)
router.post("/", controller.insertar)
router.put("/:_id", controller.actualizar)
router.delete("/:_id", controller.eliminar)

export default router