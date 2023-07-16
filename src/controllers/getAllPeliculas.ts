import { peliculaConverter } from "../models/pelicula"
import { db } from ".."

async function getAllPeliculas(_request, response, next) {
	try {
		const result = await db.collection("peliculas")
			.withConverter(peliculaConverter)
			.get()

		const peliculas = result.docs.map((doc) => doc.data())

		return response.send(peliculas)
	} catch (error) {
		return next(error)
	}
}


export default getAllPeliculas
