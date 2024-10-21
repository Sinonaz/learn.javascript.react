import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectUsersIds } from "."

export const getUsers = createAsyncThunk(
	"getUsers",
	async (_, { rejectWithValue }) => {
		const response = await fetch("http://localhost:3001/api/users/")
		const result = await response.json()

		if (!result.length) {
			rejectWithValue("No data")
			return
		}
		return result
	},
	{
		condition: (_, { getState }) => {
			return Boolean(selectUsersIds(getState()).length)
		},
	}
)
