const router = require('express').Router()
const tableCities = require('./cities/tableCities')
const tableClients = require('./clients/tableClients')
const Cities = require('./cities/Cities')
const Clients = require('./clients/Clients')

//Cadastro e consulta de cidades
router.post('/cities', async(request, response) => {
    const dataReceived = request.body
    const cities = new Cities(dataReceived)
    await cities.create()
    response.send(
        JSON.stringify(cities)
    )
})


router.get('/cities', async(request, response) => {
    const result = await tableCities.list()
    response.send(
        JSON.stringify(result)
    )
})


router.get('/cities/name=:name', async(request, response) => {
    try {
        const name = request.params.name
        const cities = new Cities({ name: name })
        await cities.loadWithName()
        response.send(
            JSON.stringify(cities)
        )
    } catch (error) {
        response.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})

router.get('/cities/state=:state', async(request, response) => {
    try {
        const state = request.params.state
        const cities = new Cities({ state: state })
        await cities.loadWithState()
        response.send(
            JSON.stringify(cities)
        )
    } catch (error) {
        response.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})


//Cadastro, consulta, modificacao e remocao de clientes 

router.post('/clients', async(request, response) => {
    const dataReceived = request.body
    const clients = new Clients(dataReceived)
    await clients.create()
    response.send(
        JSON.stringify(clients)
    )
})

router.get('/clients', async(request, response) => {
    const result = await tableClients.list()
    response.send(
        JSON.stringify(result)
    )
})


router.get('/clients/name=:name', async(request, response) => {
    try {
        const name = request.params.name
        const clients = new Clients({ full_name: name })
        await clients.loadWithName()
        response.send(
            JSON.stringify(clients)
        )
    } catch (error) {
        response.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})

router.get('/clients/:idClient', async(request, response) => {
    try {
        const id = request.params.idClient
        const clients = new Clients({ id: id })
        await clients.loadWithId()
        response.send(
            JSON.stringify(clients)
        )
    } catch (error) {
        response.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})


module.exports = router