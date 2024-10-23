import { useParams } from "react-router-dom"
import { useGetDishesQuery } from "../../redux/services/api/api"
import { MenuItem } from "../MenuItem/MenuItem"

export const MenuPage = () => {
	const { activeRestaurantId } = useParams()

	const { data, isLoading, isError } = useGetDishesQuery(activeRestaurantId)

	if (isLoading) {
		return <div>Loading</div>
	}

	if (isError) {
		return <div>Error</div>
	}

	if (!data) return null

	return (
		<>
			{data.map(({ name, id }) => (
				<MenuItem key={id} name={name} id={id} />
			))}
		</>
	)
}
