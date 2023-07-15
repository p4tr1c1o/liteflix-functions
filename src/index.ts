import * as functions from "firebase-functions"
import * as admin from "firebase-admin"

import express from "express"
import { errorHandler } from "./middlewares/errorHandler"
import { peliculaConverter } from "./models/pelicula"
// import peliculasRouter from "./routers/peliculas.router"

admin.initializeApp()


const app = express()
app.use(express.json())
// app.use(peliculasRouter)

app.use(async (_req, response, next) => {
	try {
		const result = await admin.firestore()
			.collection("peliculas")
			.withConverter(peliculaConverter)
			.get()

		return response.send(result.docs)
	} catch (error) {
		functions.logger.error(error)
		return next(error)
	}
})

app.use((_req, res) => {
	res.sendStatus(404)
})

app.use((error, _request, response, _next) => {
	errorHandler(error, response)
})

export const api = functions.https.onRequest(app)
