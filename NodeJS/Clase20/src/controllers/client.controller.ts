import GenericController from './generic.controller';
import { ClientModel } from "../models"

class ClientController extends GenericController {
    constructor() {
        super(ClientModel)
    }

}

export default ClientController