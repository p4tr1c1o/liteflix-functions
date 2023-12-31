import * as functions from "firebase-functions"
import * as admin from "firebase-admin"

import express from "express"
import { errorHandler } from "./middlewares/errorHandler"
import peliculasRouter from "./routers/products.router"
import cors from "cors"

admin.initializeApp()
export const db = admin.firestore()

const app = express()
app.use(express.json())
app.use(cors())

app.use(peliculasRouter)

app.use((_req, res) => {
	res.sendStatus(404)
})

app.use((error, _request, response) => {
	errorHandler(error, response)
})

export const api = functions.https.onRequest(app)
