import { configureStore } from "@reduxjs/toolkit"
import { restaurantSlice } from "./restaurants"
import { reviewSlice } from "./reviews"
import { dishSlice } from "./dishes"
import { userSlice } from "./users"

export const store = configureStore({
	reducer: {
		[restaurantSlice.name]: restaurantSlice.reducer,
		[reviewSlice.name]: reviewSlice.reducer,
		[dishSlice.name]: dishSlice.reducer,
		[userSlice.name]: userSlice.reducer,
	},
})
