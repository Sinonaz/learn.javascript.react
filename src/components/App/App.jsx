import { Layout } from "../Layout/Layout"
import { ThemeContextProvider } from "../ThemeContext/ThemeContext"
import { UserContextProvider } from "../UserContext/UserContext"
import { Provider } from "react-redux"
import { store } from "../../redux/redux"
import { RestaurantsPage } from "../RestaurantsPage/RestaurantsPage"

export const App = () => {
	return (
		<Provider store={store}>
			<ThemeContextProvider>
				<UserContextProvider>
					<Layout>
						<RestaurantsPage />
					</Layout>
				</UserContextProvider>
			</ThemeContextProvider>
		</Provider>
	)
}
