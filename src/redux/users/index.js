import { createSlice } from "@reduxjs/toolkit"
import { normalizedUsers } from "../../materials/normalized-mock"

const initialState = {
	entities: normalizedUsers.reduce((acc, item) => {
		acc[item.id] = item

		return acc
	}, {}),
	ids: normalizedUsers.map(({ id }) => id),
	items: normalizedUsers,
}

export const userSlice = createSlice({
	name: "users",
	initialState,
	selectors: {
		selectUsersIds: state => state.ids,
		selectUserById: (state, id) => state.entities[id],
		selectUsersList: state => state.items,
	},
})

export const { selectUsersIds, selectUserById, selectUsersList } =
	userSlice.selectors
