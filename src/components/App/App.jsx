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

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
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
								path: ":menu",
								element: <RestaurantPage />,
							},
							{
								path: ":reviews",
								element: <RestaurantPage />,
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
					<RouterProvider router={router}>
						<Layout>
							<RestaurantsPage />
						</Layout>
					</RouterProvider>
				</UserContextProvider>
			</ThemeContextProvider>
		</Provider>
	)
}
