import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectDishById } from "."

export const getDish = createAsyncThunk(
	"dishes/getDish",
	async (id, { rejectWithValue }) => {
		const response = await fetch(`http://localhost:3001/api/dish/${id}`)

		const result = await response.json()

		if (!result) {
			rejectWithValue("No data")
			return
		}

		return result
	},
	{
		condition: (id, { getState }) => {
			return Boolean(selectDishById(getState(), id))
		},
	}
)
