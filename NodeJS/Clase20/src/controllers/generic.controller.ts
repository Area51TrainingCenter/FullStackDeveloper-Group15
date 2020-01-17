class GenericController {
    constructor(private model: any) {
        this.model = model
        this.getAll = this.getAll.bind(this)
        this.getOne = this.getOne.bind(this)
        this.insert = this.insert.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    async getAll(req, res) {
        const users = await this.model.find()

        res.json(users)
    }

    async getOne(req, res) {
        const id = req.params.id
        // const user = await this.model.findById(id)
        // res.json(user)
        res.send("Llegó al controlador genérico")
    }

    async insert(req, res) {
        const data = req.body
        const user = new this.model(data)
        const newUser = await user.save()
        res.json(newUser)
    }

    async update(req, res) {
        const id = req.params.id
        const body = req.body
        const userUpdated = await this.model.findByIdAndUpdate(id, body)
        res.json(userUpdated)
    }

    async delete(req, res) {
        const id = req.params.id
        const userDeleted = await this.model.findByIdAndRemove(id)
        res.json(userDeleted)
    }
}

export default GenericController