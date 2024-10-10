import { Restaurant } from "../Restaurant/Restaurant"
import { RestaurantTabs } from "../RestaurantTabs/RestaurantTabs"
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectRestaurantIds } from "../../redux/restaurants"

export const RestaurantsPage = () => {
	const restaurantsIds = useSelector(selectRestaurantIds)

	const [activeRestaurantId, setActiveRestaurantId] = useState(
		restaurantsIds[0]
	)

	return (
		<>
			<RestaurantTabs
				activeRestaurantId={activeRestaurantId}
				onClick={setActiveRestaurantId}
			/>

			<Restaurant key={activeRestaurantId} id={activeRestaurantId} />
		</>
	)
}
