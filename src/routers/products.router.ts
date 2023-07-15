import { Router } from "express"
import getAllPeliculas from "../controllers/getAllPeliculas"

const peliculasRouter = Router()

peliculasRouter.route("/peliculas")
	.get(getAllPeliculas)

export default peliculasRouter
