const modelTableCities = require('../routes/cities/modelTableCities')
const modelTableClients = require('../routes/clients/modelTableClients')


modelTableCities
    .sync()
    .then(() => console.log('Table cities created'))
    .catch(console.log)

modelTableClients
    .sync()
    .then(() => console.log('Table clients created'))
    .catch(console.log)