import { useState } from "react"
import { Layout } from "../Layout/Layout"
import { Restaurant } from "../Restaurant/Restaurant"
import { Tabs } from "../Tabs/Tabs"
import { restaurants } from "../../mock"

export const App = () => {
	const [restaurant, setRestaurant] = useState(restaurants[0])

	const changeItem = id => {
		setRestaurant(restaurants.find(restaurant => restaurant.id === id))
	}

	return (
		<Layout>
			<Tabs
				items={restaurants}
				currentItem={restaurant}
				changeItem={changeItem}
			/>

			<Restaurant
				key={restaurant.id}
				name={restaurant.name}
				menu={restaurant.menu}
				reviews={restaurant.reviews}
			/>
		</Layout>
	)
}
