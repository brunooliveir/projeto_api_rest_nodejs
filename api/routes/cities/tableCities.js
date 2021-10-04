const model = require('./modelTableCities')

module.exports = {
    list() {
        return model.findAll()
    },
    insert(cities) {
        return model.create(cities)
    },
    async catchForName(name) {
        const finded = await model.findAll({
            where: {
                name: name
            }
        })

        if (!finded) {
            throw new Error('City name not found')
        }

        return finded
    },
    async catchForState(state) {
        const finded = await model.findAll({
            where: {
                state: state
            }
        })

        if (!finded) {
            throw new Error('City state not found')
        }

        return finded
    }
}