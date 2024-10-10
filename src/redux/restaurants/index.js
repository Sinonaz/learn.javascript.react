import { createSlice } from "@reduxjs/toolkit"
import { normalizedRestaurants } from "../../normalized-mock"

const initialState = {
	entities: normalizedRestaurants.reduce((acc, item) => {
		acc[item.id] = item

		return acc
	}, {}),
	ids: normalizedRestaurants.map(({ id }) => id),
	items: normalizedRestaurants,
}

export const restaurantSlice = createSlice({
	name: "restaurants",
	initialState,
	selectors: {
		selectRestaurantIds: state => state.ids,
		selectRestaurantById: (state, id) => state.entities[id],
		selectRestaurantList: state => state.items,
	},
})

export const {
	selectRestaurantIds,
	selectRestaurantById,
	selectRestaurantList,
} = restaurantSlice.selectors
