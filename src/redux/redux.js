import { configureStore } from "@reduxjs/toolkit"
import { restaurantSlice } from "./restaurants"
import { reviewSlice } from "./reviews"
import { dishSlice } from "./dishes"
import { userSlice } from "./users"
import { cartSlice } from "./ui/cart"
import { apiSlice } from "./services/api/api"

export const store = configureStore({
	reducer: {
		[restaurantSlice.name]: restaurantSlice.reducer,
		[reviewSlice.name]: reviewSlice.reducer,
		[dishSlice.name]: dishSlice.reducer,
		[userSlice.name]: userSlice.reducer,
		[cartSlice.name]: cartSlice.reducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},

	middleware: getDefaultMiddlewares =>
		getDefaultMiddlewares().concat(apiSlice.middleware),
})
