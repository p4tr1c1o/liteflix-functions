import * as functions from "firebase-functions"
import * as admin from "firebase-admin"

import express from "express"
import { errorHandler } from "./middlewares/errorHandler"
import peliculasRouter from "./routers/peliculas.router"
// import { peliculaConverter } from "./models/pelicula"


admin.initializeApp()

const app = express()
app.use(express.json())

app.use(peliculasRouter)

app.use((_req, res) => {
	res.sendStatus(404)
})

app.use((error, _request, response, _next) => {
	errorHandler(error, response)
})

export const api = functions.https.onRequest(app)
