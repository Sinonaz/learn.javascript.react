import { createSlice } from "@reduxjs/toolkit"
import { normalizedDishes } from "../../../materials/normalized-mock"

const initialState = {
	entities: normalizedDishes.reduce((acc, item) => {
		acc[item.id] = item

		return acc
	}, {}),
	ids: normalizedDishes.map(({ id }) => id),
	items: normalizedDishes,
}

export const dishSlice = createSlice({
	name: "dishes",
	initialState,
	selectors: {
		selectDishesIds: state => state.ids,
		selectDishById: (state, id) => state.entities[id],
		selectDishesList: state => state.items,
	},
})

export const { selectDishesIds, selectDishById, selectDishesList } =
	dishSlice.selectors
