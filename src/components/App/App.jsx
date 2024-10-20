import { Layout } from "../Layout/Layout"
import { ThemeContextProvider } from "../ThemeContext/ThemeContext"
import { UserContextProvider } from "../UserContext/UserContext"
import { Provider } from "react-redux"
import { store } from "../../redux/redux"
import { RestaurantsPage } from "../RestaurantsPage/RestaurantsPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RestaurantPage } from "../RestaurantPage/RestaurantPage"
import { HomePage } from "../HomePage/HomePage"
import { DishPage } from "../DishPage/DishPage"
import { MenuPage } from "../MenuPage/MenuPage"
import { ReviewsPage } from "../ReviewsPage/ReviewsPage"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "restaurants",
				element: <RestaurantsPage />,
				children: [
					{
						path: ":activeRestaurantId",
						element: <RestaurantPage />,
						children: [
							{
								index: true,
								element: <MenuPage />,
							},
							{
								path: "menu",
								element: <MenuPage />,
							},
							{
								path: "reviews",
								element: <ReviewsPage />,
							},
						],
					},
				],
			},
			{
				path: "dish",
				children: [
					{
						path: ":dishId",
						element: <DishPage />,
					},
				],
			},
		],
	},
])

export const App = () => {
	return (
		<Provider store={store}>
			<ThemeContextProvider>
				<UserContextProvider>
					<RouterProvider router={router} />
				</UserContextProvider>
			</ThemeContextProvider>
		</Provider>
	)
}
