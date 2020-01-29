import { GenericoController } from "./generico.controller";
import { modeloReceta } from "../models";

class Controller extends GenericoController {
    constructor() {
        super(modeloReceta)
    }
}

export default Controller