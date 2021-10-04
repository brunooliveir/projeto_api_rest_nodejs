const router = require('express').Router()
const tableCities = require('./cities/tableCities')
const tableClients = require('./clients/tableClients')
const Cities = require('./cities/Cities')
const Clients = require('./clients/Clients')

//Cadastro e consulta de cidades
router.post('/cities', async(request, response) => {
    try {
        const dataReceived = request.body
        const cities = new Cities(dataReceived)
        await cities.create()
        response.status(201)
        response.send(
            JSON.stringify(cities)
        )
    } catch (error) {
        response.status(400)
        response.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})



router.get('/cities', async(request, response) => {
    const result = await tableCities.list()
    response.status(200)
    response.send(
        JSON.stringify(result)
    )
})


router.get('/cities/name=:name', async(request, response) => {
    try {
        const name = request.params.name
        const cities = await tableCities.catchForName(name)
        response.status(200)
        response.send(
            JSON.stringify(cities)
        )
    } catch (error) {
        response.status(404)
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
        const cities = await tableCities.catchForState(state)
        response.status(200)
        response.send(
            JSON.stringify(cities)
        )
    } catch (error) {
        response.status(404)
        response.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})




//Cadastro, consulta, modificacao e remocao de clientes 

router.post('/clients', async(request, response) => {
    try {
        const dataReceived = request.body
        const clients = new Clients(dataReceived)
        await clients.create()
        response.status(201)
        response.send(
            JSON.stringify(clients)
        )
    } catch (error) {
        response.status(400)
        response.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})

router.patch('/clients/:id', async(request, response) => {
    try {
        const id = request.params.id
        const dataReceived = request.body
        const data = Object.assign({}, dataReceived, { id: id })
        const client = new Clients(data)
        await client.changeName()
        response.status(204)
        response.end()
    } catch (error) {
        response.status(400)
        response.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
})

router.delete('/clients/:id', async(request, response) => {
    try {
        const id = request.params.id
        const client = new Clients({ id: id })
        await client.loadWithId()
        await client.removeClient()
        response.status(204)
        response.end()
    } catch (error) {
        response.status(404)
        response.send(
            JSON.stringify({
                message: error.message
            })
        )
    }
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
        const client = await tableClients.catchForName(name)
        response.status(200)
        response.send(
            JSON.stringify(client)
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