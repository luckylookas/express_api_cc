import express from 'express'
import bodyParser from 'body-parser'
import store from './storage.js'

const jsonParser = bodyParser.json()
const api = express()



api.listen(8080, () => {})
