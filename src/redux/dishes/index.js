import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { RequestStatus } from "../../../utils/consts"
import { getDishes } from "./get-dishes"
import { getDish } from "./get-dish"

const entityAdapter = createEntityAdapter()

export const dishSlice = createSlice({
	name: "dishes",
	initialState: entityAdapter.getInitialState({
		requestStatus: { dishes: RequestStatus.IDLE, dish: RequestStatus.IDLE },
	}),
	selectors: {
		selectDishesIds: state => state.ids,
		selectDishById: (state, id) => state.entities[id],
		selectRequestStatus: state => state.requestStatus.dishes,
		selectDishRequestStatus: state => state.requestStatus.dish,
	},
	extraReducers: builder =>
		builder
			.addCase(getDishes.pending, state => {
				state.requestStatus.dishes = RequestStatus.PENDING
			})
			.addCase(getDishes.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload)
				state.requestStatus.dishes = RequestStatus.FULFILLED
			})
			.addCase(getDishes.rejected, state => {
				state.requestStatus.dishes = RequestStatus.REJECTED
			})
			.addCase(getDish.pending, state => {
				state.requestStatus.dish = RequestStatus.PENDING
			})
			.addCase(getDish.fulfilled, (state, { payload }) => {
				entityAdapter.setOne(state, payload)
				state.requestStatus.dish = RequestStatus.FULFILLED
			})
			.addCase(getDish.rejected, state => {
				state.requestStatus.dish = RequestStatus.REJECTED
			}),
})

export const {
	selectDishesIds,
	selectDishById,
	selectDishRequestStatus,
	selectRequestStatus,
} = dishSlice.selectors
