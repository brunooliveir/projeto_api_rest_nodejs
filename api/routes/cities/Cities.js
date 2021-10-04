const tableCities = require('./tableCities')

class Cities {
    constructor({ id, name, state, createdAt, updatedAt, version }) {
        this.id = id
        this.name = name
        this.state = state
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.version = version
    }

    async create() {
        this.validate()
        const result = await tableCities.insert({
            name: this.name,
            state: this.state
        })

        this.id = result.id
        this.createdAt = result.createdAt
        this.updatedAt = result.updatedAt
        this.version = result.version
    }

    validate() {
        const fields = ['name', 'state']

        fields.forEach(field => {
            const value = this[field]

            if (typeof value !== 'string' || value.length === 0) {
                throw new Error('Invalide field')
            }
        })
    }

}



module.exports = Cities