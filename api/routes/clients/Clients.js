const tableClients = require('./tableClients')

class Clients {
    constructor({ id, full_name, gender, date_of_birth, age, city, createdAt, updatedAt, version }) {
        this.id = id
        this.full_name = full_name
        this.gender = gender
        this.date_of_birth = date_of_birth
        this.age = age
        this.city = city
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.version = version
    }

    async create() {
        const result = await tableClients.insert({
            full_name: this.full_name,
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            age: this.age,
            city: this.city
        })

        this.id = result.id
        this.createdAt = result.createdAt
        this.updatedAt = result.updatedAt
        this.version = result.version
    }

    async loadWithName() {
        const finded = await tableClients.catchForName(this.full_name)
        this.id = finded.id
        this.full_name = finded.full_name
        this.gender = finded.gender
        this.date_of_birth = finded.date_of_birth
        this.age = finded.age
        this.city = finded.city
        this.createdAt = finded.createdAt
        this.updatedAt = finded.updatedAt
        this.version = finded.version
    }

    async loadWithId() {
        const finded = await tableClients.catchForId(this.id)
        this.id = finded.id
        this.full_name = finded.full_name
        this.gender = finded.gender
        this.date_of_birth = finded.date_of_birth
        this.age = finded.age
        this.city = finded.city
        this.createdAt = finded.createdAt
        this.updatedAt = finded.updatedAt
        this.version = finded.version
    }



}

module.exports = Clients