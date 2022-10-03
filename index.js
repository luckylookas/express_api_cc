import express from 'express'
import bodyParser from 'body-parser'
import store from './storage.js'

const jsonParser = bodyParser.json()
const api = express()

api.get('/people', (req, res) => {
    res.json(store.get())
})

api.get('/people/:id', (req, res) => {
    if (!store.get(req.params.id)) {
        return res.sendStatus(404)
    }
    res.json(store.get(req.params.id))
})

api.post('/people', jsonParser, (req, res) => {
    if (!("name" in req.body) || !("age" in req.body)) {
        return res.sendStatus(400)
    }
    res.json(store.insert(req.body))
})

api.put('/people/:id', jsonParser, (req, res) => {
    if (!("name" in req.body) || !("age" in req.body)) {
        return res.sendStatus(400)
    }
    if (!store.get(req.params.id)) {
        return res.sendStatus(404)
    }
    store.update(req.body, req.params.id)
    res.sendStatus(200)
})

api.patch('/people/:id', jsonParser, (req, res) => {
    if (!store.get(req.params.id)) {
        return res.sendStatus(404)
    }
    store.update({...store[req.params.id], ...req.body}, req.params.id)
    res.sendStatus(200)
})

api.delete('/people/:id', (req, res) => {
    store.remove(req.params.id)
    res.sendStatus(200)
})

api.listen(8080, () => {})
