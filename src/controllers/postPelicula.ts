
import { db } from ".."
import Pelicula from "../models/pelicula"

async function postPelicula(_request, response, next) {
	try {
		// const pelicula = new Pelicula(request.body)
		const pelicula: Pelicula = {
			titulo: "asldkfjlaskdf",
			backdrop_path: "https://image.tmdb.org/t/p/original/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
		}
		const doc = db.collection("peliculas").doc()

		await doc.set({ ...pelicula })
		pelicula.docId = doc.id

		return response.json(pelicula)
	} catch (error) {
		return next(error)
	}
}

export default postPelicula
