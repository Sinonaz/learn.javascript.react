import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { RequestStatus } from "../../../utils/consts"
import { getRestaurants } from "./get-restaurants"
import { getRestaurant } from "./get-restaurant"

const entityAdapter = createEntityAdapter()

export const restaurantSlice = createSlice({
	name: "restaurants",
	initialState: entityAdapter.getInitialState({
		requestStatus: {
			restaurants: RequestStatus.IDLE,
			restaurant: RequestStatus.IDLE,
		},
	}),
	selectors: {
		selectRestaurantsIds: state => state.ids,
		selectRestaurantById: (state, id) => state.entities[id],
		selectRestaurantList: state => state.items,
		selectRequestStatus: state => state.requestStatus.restaurants,
		selectRestaurantRequestStatus: state => state.requestStatus.restaurant,
	},
	extraReducers: builder =>
		builder
			.addCase(getRestaurants.pending, state => {
				state.requestStatus.restaurants = RequestStatus.IDLE
			})
			.addCase(getRestaurants.fulfilled, (state, { payload }) => {
				entityAdapter.setAll(state, payload)
				state.requestStatus.restaurants = RequestStatus.FULFILLED
			})
			.addCase(getRestaurants.rejected, state => {
				state.requestStatus.restaurants = RequestStatus.REJECTED
			})
			.addCase(getRestaurant.pending, state => {
				state.requestStatus.restaurant = RequestStatus.IDLE
			})
			.addCase(getRestaurant.fulfilled, (state, { payload }) => {
				entityAdapter.setOne(state, payload)
				state.requestStatus.restaurant = RequestStatus.FULFILLED
			})
			.addCase(getRestaurant.rejected, state => {
				state.requestStatus.restaurant = RequestStatus.REJECTED
			}),
})

export const {
	selectRestaurantsIds,
	selectRestaurantById,
	selectRestaurantList,
	selectRequestStatus,
	selectRestaurantRequestStatus,
} = restaurantSlice.selectors
