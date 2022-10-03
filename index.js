import express from 'express'
import bodyParser from 'body-parser'
import store from './storage.js'

const jsonParser = bodyParser.json()
const api = express()

//store: get(id?), update(person, id), insert(person), remove(id), getByAge(age)

api.listen(8080, () => {})
