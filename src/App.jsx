import { useState } from "react"
import { Layout } from "./components/Layout"
import { Restaurant } from "./components/Restaurant"
import { Tabs } from "./components/Tabs"
import { restaurants } from "./mock"

export const App = () => {
	const [restaurant, setRestaurant] = useState(restaurants[0])

	const changeItem = id => {
		setRestaurant(restaurants.find(restaurant => restaurant.id === id))
	}

	return (
		<Layout>
			<Tabs items={restaurants} changeItem={changeItem} />

			<Restaurant
				key={restaurant.id}
				name={restaurant.name}
				menu={restaurant.menu}
				reviews={restaurant.reviews}
			/>
		</Layout>
	)
}