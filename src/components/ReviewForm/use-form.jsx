import { useReducer } from "react"
import { ACTION_TYPE, DEFAULT_FROM_VALUES } from "./constants"

const reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.NAME:
			return {
				...DEFAULT_FROM_VALUES,
				name: payload,
			}
		case ACTION_TYPE.TEXT:
			return {
				...state,
				text: payload,
			}
		case ACTION_TYPE.RATING:
			return {
				...state,
				rating: payload,
			}
		case ACTION_TYPE.CLEAR:
			return {
				...DEFAULT_FROM_VALUES,
			}
		default:
			return state
	}
}

export const useForm = () => {
	const [{ name, text, rating }, dispatch] = useReducer(
		reducer,
		DEFAULT_FROM_VALUES
	)

	const setAction = (type, value) => {
		if (!type) return

		dispatch({ type: type, payload: value })
	}

	return {
		name,
		text,
		rating,
		setAction,
	}
}
