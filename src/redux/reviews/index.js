import { createSlice } from "@reduxjs/toolkit"
import { normalizedReviews } from "../../normalized-mock"

const initialState = {
	entities: normalizedReviews.reduce((acc, item) => {
		acc[item.id] = item

		return acc
	}, {}),
	ids: normalizedReviews.map(({ id }) => id),
	items: normalizedReviews,
}

export const reviewSlice = createSlice({
	name: "reviews",
	initialState,
	selectors: {
		selectReviewsIds: state => state.ids,
		selectReviewById: (state, id) => state.entities[id],
		selectReviewsList: state => state.items,
	},
})

export const { selectReviewsIds, selectReviewById, selectReviewsList } =
	reviewSlice.selectors
