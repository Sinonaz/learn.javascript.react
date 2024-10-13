import { useParams } from "react-router-dom"
import { Restaurant } from "../Restaurant/Restaurant"

export const RestaurantPage = () => {
	const { activeRestaurantId } = useParams()

	return <Restaurant id={activeRestaurantId} />
}
