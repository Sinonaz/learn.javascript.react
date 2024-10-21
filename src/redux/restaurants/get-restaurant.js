import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectRestaurantById } from "."

export const getRestaurant = createAsyncThunk(
	"restaurants/getRestaurant",
	async (id, { rejectWithValue }) => {
		const response = await fetch(`http://localhost:3001/api/restaurant/${id}`)

		const result = await response.json()

		if (!result) {
			rejectWithValue("No data")
			return
		}

		return result
	},
	{
		condition: (id, { getState }) => {
			return selectRestaurantById(getState(), id)
		},
	}
)
