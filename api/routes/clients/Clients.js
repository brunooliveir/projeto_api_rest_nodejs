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
        this.validate()
        const result = await tableClients.insert({
            full_name: this.full_name,
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            city: this.city
        })

        this.id = result.id

        //calculo da idade
        if (result.createdAt.getDate() >= result.date_of_birth.getDate()) { // 03 > 02
            if (result.createdAt.getMonth() >= result.date_of_birth.getMonth()) {
                this.age = result.createdAt.getFullYear() - result.date_of_birth.getFullYear()
            }
        } else {
            this.age = result.createdAt.getFullYear() - (result.date_of_birth.getFullYear() + 1)
        }


        this.createdAt = result.createdAt
        this.updatedAt = result.updatedAt
        this.version = result.version
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

    async changeName() {
        await tableClients.catchForId(this.id)
        const nextName = ['full_name']
        const dataForRefresh = {}

        nextName.forEach((slot) => {
            const value = this[slot]
            if (typeof value === 'string' && value.length > 0) {
                dataForRefresh[slot] = value
            }
        })
        if (Object.keys(dataForRefresh).length === 0) {
            throw new Error('It has no name to replace')
        }

        await tableClients.changeName(this.id, dataForRefresh)
    }

    async removeClient() {
        return tableClients.removeClient(this.id)
    }



    validate() {
        const fieldsString = ['full_name']
        const fieldsNumber = ['age']

        fieldsNumber.forEach(fieldNumber => {
            const value = this[fieldNumber]
            if (value <= 0) {
                throw new Error('Invalide age field')
            }
        })

        fieldsString.forEach(fieldString => {
            const value = this[fieldString]

            if (typeof value !== 'string' || value.length === 0) {
                throw new Error('Invalide name field')
            }
        })
    }

}

module.exports = Clients