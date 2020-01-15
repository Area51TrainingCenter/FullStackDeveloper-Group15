import * as express from "express"
import { ClientController } from "../controllers"

const routes = express.Router()
const controller = new ClientController()

routes.get("/", async (req, res) => {
    res.json(await controller.getAll())
})

routes.get("/:id", (req, res) => {
    res.json(controller.getOne(req.params.id))
})

routes.post("/", (req, res) => {
    res.json(controller.insert(req.body))
})

routes.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body

    res.json(controller.update(id, body))
})

routes.delete("/:id", (req, res) => {
    res.json(controller.delete(req.params.id))
})

export default routes