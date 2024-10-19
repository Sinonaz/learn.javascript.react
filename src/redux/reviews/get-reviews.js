import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectRestaurantById } from "../restaurants"
import { selectReviewById } from "."

export const getReviews = createAsyncThunk(
	"reviews/getReviews",
	async (id, { rejectWithValue }) => {
		const response = await fetch(
			`http://localhost:3001/api/reviews?restaurantId=${id}`
		)

		const result = await response.json()

		if (!result.length) {
			rejectWithValue("No data")
			return
		}

		return result
	},
	{
		condition: (id, { getState }) => {
			const restaurant = selectRestaurantById(getState(), id)

			const { reviews } = restaurant

			for (let id of reviews) {
				if (!selectReviewById(getState(), id)) {
					return true
				}
			}
			return false
		},
	}
)
