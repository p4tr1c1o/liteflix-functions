import * as functions from "firebase-functions"
import express from "express"


const app = express()

app.use((request, response) => {
	response.send("Hola Mundoxx")
})

export const helloWorld = functions.https.onRequest(app)
