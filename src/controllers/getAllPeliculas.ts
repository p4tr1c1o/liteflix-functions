// import { firestore } from "./../index"
import * as admin from "firebase-admin"
import * as logger from "firebase-functions/logger"

import { peliculaConverter } from "../models/pelicula"

async function getAllPeliculas(request, response, next) {
	try {
		await admin.firestore()
			.collection("peliculas")
			.withConverter(peliculaConverter)
			.listDocuments()

		return response("result.docs")
	} catch (error) {
		logger.error(error)
		next(error)
	}
}


export default getAllPeliculas
