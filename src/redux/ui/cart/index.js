import { createSlice, createSelector } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
	name: "cart",
	initialState: {},
	reducers: {
		addToCart: (state, { payload }) => {
			state[payload] = (state[payload] || 0) + 1
		},
		removeFromCart: (state, { payload }) => {
			if (!state[payload]) {
				return state
			}

			state[payload] = state[payload] - 1

			if (state[payload] <= 0) {
				delete state[payload]
			}
		},
	},
	selectors: {
		selectAmountById: (state, id) => state[id] || 0,
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const { selectAmountById } = cartSlice.selectors

const selectCartSlice = state => state.cart

export const selectCartItems = createSelector([selectCartSlice], cartSlice => {
	return Object.keys(cartSlice).reduce((acc, id) => {
		acc.push({ id, amount: cartSlice[id] })

		return acc
	}, [])
})
