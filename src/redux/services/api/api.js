import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
	tagTypes: ["Reviews"],
	endpoints: builder => ({
		getRestaurants: builder.query({ query: () => "/restaurants" }),
		getUsers: builder.query({ query: () => "/users" }),
		getDishes: builder.query({
			query: restaurantId => `/dishes?restaurantId=${restaurantId}`,
		}),
		getReviews: builder.query({
			query: restaurantId => `/reviews?restaurantId=${restaurantId}`,
			providesTags: id => [{ type: "Reviews", id }],
		}),
		getDish: builder.query({
			query: dishId => `/dish/${dishId}`,
		}),
		addReview: builder.mutation({
			query: ({ restaurantId, review }) => ({
				method: "POST",
				body: review,
				url: `/review/${restaurantId}`,
			}),
			invalidatesTags: ({ restaurantId }) => [
				{ type: "Reviews", id: restaurantId },
			],
		}),
	}),
})

export const {
	useGetRestaurantsQuery,
	useGetDishesQuery,
	useGetReviewsQuery,
	useGetDishQuery,
	useGetUsersQuery,
	useAddReviewMutation,
} = apiSlice
