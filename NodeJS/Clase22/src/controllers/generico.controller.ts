class GenericoController {
    constructor(private modelo: any) {
        this.listar = this.listar.bind(this)
        this.detalle = this.detalle.bind(this)
        this.actualizar = this.actualizar.bind(this)
        this.eliminar = this.eliminar.bind(this)
        this.insertar = this.insertar.bind(this)
    }

    async listar(req, res) {
        const lista = await this.modelo.find()

        res.json(lista)
    }

    async detalle(req, res) {
        const _id = req.params._id

        const elemento = await this.modelo.findOne({ _id })

        res.json(elemento)
    }

    async insertar(req, res) {
        const body = req.body

        const obj = new this.modelo(body)
        await obj.save()

        res.send("Registro insertado")
    }

    async actualizar(req, res) {
        const _id = req.params._id
        const body = req.body

        await this.modelo.findOneAndUpdate({ _id }, body)

        res.send("Registro actualizado")
    }

    async eliminar(req, res) {
        const _id = req.params._id

        await this.modelo.findOneAndRemove({ _id })

        res.send("Registro eliminado")
    }
}

export { GenericoController }