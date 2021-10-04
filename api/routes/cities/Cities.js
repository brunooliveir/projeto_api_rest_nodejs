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
        const result = await tableCities.insert({
            name: this.name,
            state: this.state
        })

        this.id = result.id
        this.createdAt = result.createdAt
        this.updatedAt = result.updatedAt
        this.version = result.version
    }

    async loadWithName() {
        const finded = await tableCities.catchForName(this.name)
        this.id = finded.id
        this.name = finded.name
        this.state = finded.state
        this.createdAt = finded.createdAt
        this.updatedAt = finded.updatedAt
        this.version = finded.version
    }

    async loadWithState() {
        const finded = await tableCities.catchForState(this.state)
        this.id = finded.id
        this.name = finded.name
        this.state = finded.state
        this.createdAt = finded.createdAt
        this.updatedAt = finded.updatedAt
        this.version = finded.version
    }
}



module.exports = Cities