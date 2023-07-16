import { Router } from "express"
import getAllPeliculas from "../controllers/getAllPeliculas"
import postPelicula from "../controllers/postPelicula"

const peliculasRouter = Router()

peliculasRouter.route("/peliculas")
	.get(getAllPeliculas)
	.post(postPelicula)

export default peliculasRouter
