import { Response } from "express"
import * as Yup from "yup"


async function postPeliculaValidator(request, response: Response, next) {
	const schema = Yup.object({
		title: Yup.string().required(),
		backdrop_path: Yup.string().required(),
	})

	try {
		await schema.validate(request.body)
	} catch (error) {
		if (error instanceof Yup.ValidationError) {
			response.status(422).json(error.message)
		}
		next(error)
	}

	next()
}

export default postPeliculaValidator
