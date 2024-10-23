import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { RequestStatus } from "../../../utils/consts"
import { getUsers } from "./get-users"

const entityAdapter = createEntityAdapter()

export const userSlice = createSlice({
	name: "users",
	initialState: entityAdapter.getInitialState({
		requestStatus: RequestStatus.IDLE,
	}),
	selectors: {
		selectUsersIds: state => state.ids,
		selectUserById: (state, id) => state.entities[id],
	},
	extraReducers: builder =>
		builder
			.addCase(getUsers.pending, state => {
				state.requestStatus = RequestStatus.PENDING
			})
			.addCase(getUsers.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload)
				state.requestStatus = RequestStatus.FULFILLED
			})
			.addCase(getUsers.rejected, state => {
				state.requestStatus = RequestStatus.REJECTED
			}),
})

export const { selectUsersIds, selectUserById, selectUsersList } =
	userSlice.selectors
