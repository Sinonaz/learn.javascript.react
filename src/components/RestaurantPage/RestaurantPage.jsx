import { useParams } from "react-router-dom"
import { Restaurant } from "../Restaurant/Restaurant"
import { useGetRestaurantsQuery } from "../../redux/services/api/api"

export const RestaurantPage = () => {
	const { activeRestaurantId } = useParams()

	const { data, isLoading, isError } = useGetRestaurantsQuery(undefined, {
		selectFromResult: ({ data }) => ({
			data: data.find(restaurant => restaurant.id === activeRestaurantId),
		}),
	})

	if (isLoading) {
		return <div>Loading</div>
	}

	if (isError) {
		return <div>Error</div>
	}

	if (!data) {
		return null
	}

	return <Restaurant id={data.id} name={data.name} />
}
