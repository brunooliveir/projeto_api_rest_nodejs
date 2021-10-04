const model = require('./modelTableCities')

module.exports = {
    list() {
        return model.findAll()
    },
    insert(cities) {
        return model.create(cities)
    },
    async catchForName(name) {
        const finded = await model.findOne({
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
        const finded = await model.findOne({
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