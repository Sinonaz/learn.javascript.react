import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectRestaurantById } from "../restaurants"
import { selectDishById } from "."

export const getDishes = createAsyncThunk(
	"dishes/getDishes",
	async (id, { rejectWithValue }) => {
		const response = await fetch(
			`http://localhost:3001/api/dishes?restaurantId=${id}`
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
			const { menu } = selectRestaurantById(getState(), id)

			for (let id of menu) {
				if (!selectDishById(getState(), id)) {
					return true
				}
			}
			return false
		},
	}
)
