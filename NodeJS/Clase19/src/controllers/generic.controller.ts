import { UserModel } from '../models'

class GenericController {
    async getAll() {
        const users = await UserModel.find()

        return users
    }

    async getOne(id) {
        // const user = await UserModel.findOne({ _id: id })
        const user = await UserModel.findById(id)
        return user
    }

    async insert(data) {
        const user = new UserModel(data)
        const newUser = await user.save()
        return newUser
    }

    async update(id, body) {
        const userUpdated = await UserModel.findByIdAndUpdate(id, body, { upsert: true })
        return userUpdated
    }

    async delete(id) {
        const userDeleted = await UserModel.findByIdAndRemove(id)
        return userDeleted
    }
}

export default GenericController