import GenericController from './generic.controller';
import { UserModel } from '../models';

class UserController extends GenericController {
    constructor() {
        super(UserModel)
    }

    detailMetaData(req, res) {
        res.json({ dateOfBirth: new Date() })
    }
}

export default UserController