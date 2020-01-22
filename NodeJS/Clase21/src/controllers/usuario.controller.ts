import { GenericoController } from "./generico.controller";
import { modeloUsuario } from "../models";

class Controller extends GenericoController {
    constructor() {
        super(modeloUsuario)
    }
}

export default Controller