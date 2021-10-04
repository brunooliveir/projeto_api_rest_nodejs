const model = require('./modelTableClients')

module.exports = {
    list() {
        return model.findAll()
    },
    insert(clients) {
        return model.create(clients)
    },
    async catchForName(name) {
        const finded = await model.findAll({
            where: {
                full_name: name
            }
        })

        if (!finded) {
            throw new Error('Client name not found')
        }

        return finded
    },
    async catchForId(id) {
        const finded = await model.findOne({
            where: {
                id: id
            }
        })

        if (!finded) {
            throw new Error('Client id not found')
        }

        return finded
    },
    changeName(id, dataForRefresh) {
        return model.update(
            dataForRefresh, {
                where: { id: id }
            }
        )
    },
    removeClient(id) {
        return model.destroy({
            where: {
                id: id
            }
        })
    }



}