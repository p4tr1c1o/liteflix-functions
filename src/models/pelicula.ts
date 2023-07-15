import {
	DocumentData,
	QueryDocumentSnapshot,
} from "firebase-admin/firestore"

class Pelicula {
	docId?: string
	titulo?: string
	backdrop_path?: string

	public constructor(init?: Partial<Pelicula>) {
		Object.assign(this, init)
		return
	}
}

export const peliculaConverter = {
	toFirestore(pelicula: Pelicula): DocumentData {
		return {
			...pelicula,
		}
	},
	fromFirestore(
		snapshot: QueryDocumentSnapshot,
	): Pelicula {
		const data = snapshot.data()
		return new Pelicula({
			...data,
			docId: snapshot.id,
		})
	},
}

export default Pelicula
