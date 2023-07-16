
import { db } from ".."
import Pelicula from "../models/pelicula"

async function postPelicula(request, response, next) {
	try {
		const pelicula = new Pelicula({ ...request.body })
		const doc = db.collection("peliculas").doc()

		await doc.set({ ...pelicula })
		pelicula.docId = doc.id

		return response.send(pelicula)
	} catch (error) {
		next(error)
	}
}

export default postPelicula
