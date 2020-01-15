import * as express from "express"
import { UserController } from "../controllers"

const routes = express.Router()
const controller = new UserController()

routes.get("/", async (req, res) => {
    res.json(await controller.getAll())
})

routes.get("/:id", async (req, res) => {
    res.json(await controller.getOne(req.params.id))
})

routes.post("/", async (req, res) => {
    res.json(await controller.insert(req.body))
})

routes.put("/:id", async (req, res) => {
    const id = req.params.id
    const body = req.body

    res.json(await controller.update(id, body))
})

routes.delete("/:id", async (req, res) => {
    res.json(await controller.delete(req.params.id))
})

export default routes