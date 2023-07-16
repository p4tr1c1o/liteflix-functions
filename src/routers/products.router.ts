import { Router } from "express"
import getAllPeliculas from "../controllers/getAllPeliculas"
import postPelicula from "../controllers/postPelicula"
import postPeliculaValidator from "../controllers/postPelicula.validator"

const peliculasRouter = Router()

peliculasRouter.route("/peliculas")
	.get(getAllPeliculas)
	.post(postPeliculaValidator, postPelicula)

export default peliculasRouter
