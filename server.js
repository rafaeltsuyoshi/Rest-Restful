const express = require('express')
const cors = require('cors')
const data = require('./data.json')

const app = express()

app.use(cors({}))

app.use(express.json())

app.get('/clients', function(req, res) {
    res.json(data)
})
app.get('/clients/:id', function(req, res) {
    const {id} = req.params
    const client = data.find(c => c.id == id)

    if(!client) return res.status(204).json()

    res.json(client)
})
app.post('/clients', function(req, res) {
    const {name, email} = req.body

    res.json({name, email})

})
app.put('/clients/:id', function(req, res) {
    const {id} = req.params
    const client = data.find(c => c.id == id)

    if(!client) return res.status(204).json()

    const {name} = req.body

    client.name = name

    res.json(client)
})
app.delete('/clients/:id', function(req, res) {
    const {id} = req.params
    const newdata = data.filter((item) => String(item.id) !== id)

    res.json(newdata)
})

app.listen(3000, function() {
    console.log('Server is runnig')
})