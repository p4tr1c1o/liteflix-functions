import * as admin from "firebase-admin"
// import * as logger from "firebase-functions/logger"

import { peliculaConverter } from "../models/pelicula"

async function getAllPeliculas(_request, response, next) {
	try {
		const result = await admin.firestore()
			.collection("peliculas")
			.withConverter(peliculaConverter)
			.get()

		const peliculas = result.docs.map((doc) => doc.data())

		return response.send(peliculas)
	} catch (error) {
		return next(error)
	}
}


export default getAllPeliculas
