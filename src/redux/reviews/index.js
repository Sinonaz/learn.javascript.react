import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { RequestStatus } from "../../../utils/consts"
import { getReviews } from "./get-reviews"

const entityAdapter = createEntityAdapter()

export const reviewSlice = createSlice({
	name: "reviews",
	initialState: entityAdapter.getInitialState({
		requestStatus: RequestStatus.IDLE,
	}),
	selectors: {
		selectReviewsIds: state => state.ids,
		selectReviewById: (state, id) => state.entities[id],
		selectRequestStatus: state => state.requestStatus,
	},
	extraReducers: builder =>
		builder
			.addCase(getReviews.pending, state => {
				state.requestStatus = RequestStatus.PENDING
			})
			.addCase(getReviews.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload)
				state.requestStatus = RequestStatus.FULFILLED
			})
			.addCase(getReviews.rejected, state => {
				state.requestStatus = RequestStatus.REJECTED
			}),
})

export const { selectReviewsIds, selectReviewById, selectRequestStatus } =
	reviewSlice.selectors
